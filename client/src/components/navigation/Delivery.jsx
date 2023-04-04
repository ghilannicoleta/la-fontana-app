import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div className="mx-auto grid w-8/12 pt-16">
      <div>
        La fontana Pizza Delivery Service is available around the clock, on a
        daily basis during working days and official holidays of the Republic of
        Moldova (excluding 31 December, 1 January and the Easter Holidays).
      </div>

      <div className="grid grid-cols-2 gap-10 pt-20">
        <div>
          <h1 className="pb-5 text-2xl font-bold">
            Daytime <br />
            (8:00 - 22:50)
          </h1>
          Daytime delivery from 8:00 to 22:50. Cost of daytime delivery - 40
          MDL. The cost of delivery at night is 50 lei. Free delivery is carried
          out for order of at least 350 MDL within Chisinau city (delivery map
          is marked in green color). Delivery is available in Chisinau suburbs:
          Cricova, Ciorescu, Stauceni, Gratiesti, Bubuieci, Vatra, Truseni,
          Tohatin, Dumbrava. Chisinau suburbs are served from 10:00 to 21:30
          (summer time) and from 10:00 to 21:00 (winter time). LIVRAREA PE
          STRADA MUNCEȘTI DE LA NR. 293 ȘI 776, ESTE 72 LEI. Attention! Delivery
          of lunches in the Telecentre and Ciocana area is not carried out.
        </div>
        <div>
          <h1 className="pb-5 text-2xl font-bold">
            Night time <br />
            (22:50 - 8:00)
          </h1>
          Night time delivery is available from 22:50 to 8:00. Minimum cost of
          order - 350 MDL, including night time delivery rate. The night time
          delivery rate is 50 MDL, regardless of the order value, and is carried
          out only within the delivery area of Chisinau as indicated on the map
          below.
        </div>
        <div>
          The following suburbs of Chisinau are served: Stauceni, Gratiesti,
          Vatra, Togatin, Dumbrava, Airport, Novobecioi, Airport town. Chisinau
          suburbs are served from 10:00 to 21:30 (summer time) and from 10:00 to
          21:00 (winter time). The cost of delivery to the suburbs is 72 lei,
          regardless of the amount of the order. Delivery to Muncesti street
          from number 293 and from number 700 is 72 lei!
        </div>
        <div>
          Prețul unei livrări este 72 lei, indiferent de valoarea comenzii
          (harta zonelor de livrare în suburbii este marcată cu orange).
          Atenție! Livrarea de prânz nu se efectuează în sectorul Telecentru și
          Ciocana.
        </div>
        <div>
          <h2 className="pb-3 text-xl">Duration of delivery</h2>
          Estimated duration of delivery ≈ 40 min. Duration of delivery may vary
          depending on order value, as well as weather and road conditions.
        </div>
        <div>
          <h2 className="pb-3 text-xl">Ordering by phone</h2>
          To order by phone, please, contact the call-center operator at
          +373(22)210-210. You can place an order for delivery or a pre-order at
          any of our locations (with you or on-site).
        </div>
        <div>
          <h2 className="pb-3 text-xl">
            On-line ordering through www.andys.md
          </h2>
          When ordering on-line through the web-site, the call-center operator
          will call you within 7 minutes after ordering to confirm the order.
          Important: Indicate your correct contact phone number so as our
          operator can confirm your order. If you are not called back, please,
          contact us at the phone number +373(22)210-210. Order that was not
          confirmed will be cancelled.
        </div>
        <div>
          <h2 className="pb-3 text-xl">Payment</h2>
          La efectuarea comenzii, plata se poate efectua în următoarele moduri:
          cash upon receipt of order; by credit cards (VISA, MasterCard,
          Maestro) upon receipt of order; by credits cards on our web-site.
        </div>
      </div>
      <div className="pt-7">
        <h2 className="pb-3 text-xl">Receipt of order</h2>
        Upon receipt of order, make sure to obtain a fiscal receipt and a
        slip-check (provided that you paid by credit card). Request additional
        documents in advance from the call-center operator. Upon receipt of
        order check the number and range of order according to the check.
      </div>
      <div className="flex justify-center pt-9">
        <Link to="/menu">
          <button
            type="button"
            className="duration-400 rounded-lg border-2 border-solid px-20 py-4 text-lg font-bold transition hover:bg-colorYellow hover:text-stone"
          >
            Go to menu
          </button>
        </Link>
      </div>
    </div>
  );
}
