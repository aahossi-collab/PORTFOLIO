
"use client";

import React, { useState } from "react";
import { Sparkles, Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { suggestPortfolioTitles } from "@/ai/flows/hero-title-brainstorming-tool";
import { useToast } from "@/hooks/use-toast";

export function BrainstormingTool() {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const handleBrainstorm = async () => {
    if (!skills || !experience) {
      toast({
        title: "Information missing",
        description: "Please fill in your skills and experience first.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const result = await suggestPortfolioTitles({ skills, experience });
      setSuggestions(result.suggestions);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold uppercase tracking-widest">
            <Sparkles className="h-4 w-4" /> AI Powered
          </div>
          <h2 className="text-4xl font-bold">Brainstorm Your Hero Tagline</h2>
          <p className="text-slate-400 text-lg">
            Not sure how to describe yourself? Let AI help you find the perfect headline for your portfolio.
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 text-white shadow-2xl backdrop-blur-xl">
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Key Skills</label>
                <Input 
                  placeholder="e.g. React, Python, UI Design, AWS" 
                  className="bg-slate-900/50 border-slate-700 focus:ring-primary"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Brief Experience</label>
                <Textarea 
                  placeholder="Describe what you've done or what you're looking for..." 
                  className="bg-slate-900/50 border-slate-700 focus:ring-primary min-h-[120px]"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleBrainstorm} 
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-xl"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Generate Ideas
                  </>
                )}
              </Button>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700 min-h-[200px] flex flex-col">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Suggestions</h4>
              {suggestions.length > 0 ? (
                <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2">
                  {suggestions.map((s, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-primary cursor-pointer transition-colors group animate-in fade-in slide-in-from-left-4 duration-300"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <p className="text-slate-200 group-hover:text-primary transition-colors italic">"{s}"</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-600 space-y-2">
                  <Sparkles className="h-10 w-10 opacity-20" />
                  <p>Your AI-powered taglines will appear here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
