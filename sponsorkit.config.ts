import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  formats: ['json', 'svg', 'png'],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 7,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 100,
      preset: presets.base,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 250,
      preset: presets.medium,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.large,
    },
    {
      title: 'Diamond Sponsors',
      monthlyDollars: 1000,
      preset: presets.xl,
    }
  ]
})