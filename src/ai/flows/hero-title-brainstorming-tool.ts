'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating creative and professional
 * titles or taglines for a personal portfolio's hero section.
 *
 * - suggestPortfolioTitles - A function that suggests portfolio titles and taglines.
 * - SuggestPortfolioTitlesInput - The input type for the suggestPortfolioTitles function.
 * - SuggestPortfolioTitlesOutput - The return type for the suggestPortfolioTitles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioTitlesInputSchema = z.object({
  skills: z
    .string()
    .describe("A comma-separated list or short description of the user's skills."),
  experience: z
    .string()
    .describe("A short description of the user's professional experience and background."),
});
export type SuggestPortfolioTitlesInput = z.infer<typeof SuggestPortfolioTitlesInputSchema>;

const SuggestPortfolioTitlesOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of creative and professional titles or taglines.'),
});
export type SuggestPortfolioTitlesOutput = z.infer<typeof SuggestPortfolioTitlesOutputSchema>;

export async function suggestPortfolioTitles(
  input: SuggestPortfolioTitlesInput
): Promise<SuggestPortfolioTitlesOutput> {
  return suggestPortfolioTitlesFlow(input);
}

const suggestPortfolioTitlesPrompt = ai.definePrompt({
  name: 'suggestPortfolioTitlesPrompt',
  input: {schema: SuggestPortfolioTitlesInputSchema},
  output: {schema: SuggestPortfolioTitlesOutputSchema},
  prompt: `You are an expert copywriter specializing in creating engaging and professional headlines for personal portfolio websites.
Your goal is to generate several creative and professional titles or taglines that a user can use in the hero section of their portfolio.

Consider the following information about the user:

Skills: {{{skills}}}
Experience: {{{experience}}}

Based on this, provide 5-8 distinct suggestions. Each suggestion should be a concise title or tagline, tailored to the user's skills and experience.
`,
});

const suggestPortfolioTitlesFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioTitlesFlow',
    inputSchema: SuggestPortfolioTitlesInputSchema,
    outputSchema: SuggestPortfolioTitlesOutputSchema,
  },
  async input => {
    const {output} = await suggestPortfolioTitlesPrompt(input);
    return output!;
  }
);
