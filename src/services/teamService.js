import { simulateFetch } from './api'

const team = [
  {
    name: 'Abhay Boadlia',
    role: 'Managing Partner, Advocate (Delhi High Court Bar Association)',
    focus:
      'Corporate advisory, litigation strategy, and regulatory matters with Delhi High Court experience.',
  },
  {
    name: 'Meera Kapoor',
    role: 'Partner, Litigation',
    focus: 'Commercial disputes, arbitration strategy, and regulatory enforcement.',
  },
  {
    name: 'Rohit Bansal',
    role: 'Partner, IP & Tech',
    focus: 'Technology contracts, data protection, and IP monetization.',
  },
  {
    name: 'Naina Deshpande',
    role: 'Principal Associate',
    focus: 'Energy & infrastructure diligence, ESG compliance, and project finance.',
  },
  {
    name: 'Kabir Singh',
    role: 'Senior Associate',
    focus: 'Employment, compliance audits, and internal investigations.',
  },
]

export const getTeamMembers = async () => simulateFetch(team)
