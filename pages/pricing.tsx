import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PricingComponent from '../components/ui/pricing'

interface Props {
  data: any[]
}

const Pricing: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const isFr = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale])
  const strings = useStrings(isFr);

  return (
    <Layout locale={locale as string} title={strings.title} desc={strings.desc}>
      <Header locale={locale as string} title={strings.headerTitle} subtitle={strings.headerSubtitle} active='pricing' />
      <PricingComponent strings={{
        ...strings.free,
        planLabels: strings.planLabels,
        usersLabel: strings.usersLabel,
        free30: strings.free30,
        free6Months: strings.free6Months,
      }} />
      <PricingComponent strings={{
        ...strings.pro,
        planLabels: strings.planLabels,
        usersLabel: strings.usersLabel,
        free30: strings.free30,
        free6Months: strings.free6Months,
      }} />
    </Layout>
  )
}

const useStrings = (isFr: boolean) => {
  return useMemo(() => {
    const strings = {
      'en': {
        'title': 'Pricing, Gesmax By Bogital',
        'desc': 'Pricing, Gesmax By Bogital',
        'headerTitle': 'Pricing',
        'headerSubtitle': 'Find the right plan with pricing that scales with your team',
        'usersLabel': 'Users',
        'free30': '30 days free',
        free6Months: '6 months free',
        'pro': {
          'title': 'Pro',
          'description': 'Unlock unlimited features and support for growing teams.',
          'buttonText': 'Purchase Gesmax',
          'items': [
            'Unlimited users',
            'Lifetime data retention',
            'Unlimited invoicing',
            'Priority support via email, phone, and chat'
          ],
          labels: {
            users: 'Users',
            vat: 'excl. VAT',
            contact: 'Contact Us'
          }
        },
        'free': {
          'title': 'Free',
          'description': 'Suited for small businesses and freelancers. Always free.',
          'buttonText': 'Use Gesmax for free',
          'items': [
            'Up to 3 users',
            '3 months data retention',
            '30 days unlimited invoicing, then 30 free invoices per month',
            'Basic support via email'
          ]
        },
        'planLabels': {
          'monthly': 'Monthly',
          'yearly': 'Yearly',
          'threeYears': '3 years'
        }

      },
      'fr': {
        'title': 'Coûts, Gesmax By Bogital',
        'desc': 'Coûts, Gesmax By Bogital',
        'headerTitle': 'Coûts',
        'headerSubtitle': 'Trouvez le tarif adapté à l\'échelle de votre équipe.',
        'usersLabel': 'Utilisateurs',
        'free30': '30 jours gratuits',
        free6Months: '6 mois gratuits',
        'pro': {
          'title': 'Pro',
          'description': 'Débloquez des fonctionnalités et un support illimitées pour vos équipes en croissance.',
          'buttonText': 'Achetez votre license Gesmax',
          'items': [
            'Utilisateurs illimités',
            'Retention des données à vie',
            'Facturation illimitée',
            'Support prioritaire via e-mail, téléphone et chat'
          ],
          labels: {
            users: 'Utilisateurs',
            vat: 'Hors TVA',
            contact: 'Contactez-nous'
          }
        },
        'free': {
          'title': 'Gratuit',
          'description': 'Adapté aux petites entreprises et aux freelancers. Toujours gratuit.',
          'buttonText': 'Utilisez Gesmax gratuitement',
          'items': [
            'Jusqu\'à 3 utilisateurs',
            'Retention des données pendant 3 mois',
            'Facturation illimitée pendant 30 jours, puis 30 factures gratuites par mois',
            'Support de base via e-mail'
          ]
        },
        'planLabels': {
          'monthly': 'Mensuel',
          'yearly': 'Annuel',
          'threeYears': '3 ans'
        }
      }
    };

    return isFr ? strings['fr'] : strings['en'];
  }, [isFr]);
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data: any[] = []
  return {
    props: { data }
  };
}

export default Pricing
