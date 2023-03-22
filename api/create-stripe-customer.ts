
import { supabase } from '../utils/supabase'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(process.env.STRIPE_API_KEY)

export default async (req: any, res: any) => {
  if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
    return res.status(401).send('You are not authorized to create a new user')
  }

  const customer = await stripe.customers.create({
    email: req.body.record.email
  })

  await supabase.from('profile').update({
    stripe_customer: customer.id
  }).eq('id', req.body.record.id)

  return res.send({ messgae: `stripe customer created hello ${customer.id}` })
}
