import Days from '@/components/days/Days';
import PastEventDays from '@/components/days/PastDays';
import PastEventDays2 from '@/components/days/PastDays2';
import PastEventDays3 from '@/components/days/PastDays3';
import PastEventDays4 from '@/components/days/PastDays4';

export default function Events() {
  return (
    <div className="min-h-screen">
      <div>
        <section className="bg-blue-800 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="text-4xl font-bold mb-4">UPCOMING EVENTS</h2>
                <p className="text-xl text-gray-400 mb-4">
                  We are planning to organize a get-together.
                </p>
                <p className="text-lg">
                  Students of 87-ag-Agri with a Major in Plant Breeding and Genetics and
                  residents of Faisalabad are required to arrive on time. The time and venue details
                  have been shared in the WhatsApp group &quot;87-ag-PBG-Fsd&quot;.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming event days */}
        <Days />
        <br />

        {/* Past events section */}
        <div>
          <section className="bg-blue-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="py-12 md:py-20 border-t border-gray-800">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="text-4xl font-bold mb-4">PREVIOUS EVENTS</h2> {/* Fixed the text */}
                  <p className="text-xl text-gray-400 mb-4">
                    We have successfully organized a get-together.
                  </p>
                  <p className="text-lg">
                    Students of 87-ag-Agri with a Major in Plant Breeding and Genetics and residents
                    of Faisalabad attended the meeting. The complete album has been shared in the
                    WhatsApp group &quot;87-ag-PBG-Fsd&quot;.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Past event days */}
          <div className="px-4">
            <PastEventDays4 />
            <br />
            <PastEventDays3 />
            <br />
            <PastEventDays2 />
            <br />
            <PastEventDays />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
