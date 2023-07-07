import React from 'react';
import'./HowWork.css'
import { Fade } from 'react-awesome-reveal';
const HowWork = () => {
    return (
        <>
            
            <div id="some-box">
            <Fade direction="down">       
      <h1 className='text-center text-white text-2xl font-bold'>🥇 How We Work On A Typical- Employment Law Case 🥇</h1>
      <p className='m-5 text-white text-center'>
In most cases our service exceeds our clients’ expectations. So we are confident that you won’t have any complaints. But if you do, you can rest assured that you have redress through the Legal Ombudsman, because we are strictly regulated by the Solicitors Regulation Authority</p>
</Fade>
<Fade direction="down">
      <article className="row" id="idea-one">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXr1NqTAvYEKGY6v8sgGHemBrB-B-pIdjtpg&usqp=CAU" alt="Image 1" />
        </div>
        <div>
          <h3>
            <p style={{ color: 'green' }}>Initial discussion</p>
          </h3>
          <p>
            <p style={{ color: 'green' }}>
              We will discuss the issue in a phone call to see whether we can help you.
              This will not take long, and there is no obligation on your part to employ
              our services, but we can’t give legal advice until you become a client.
            </p>
          </p>
        </div>
      </article>
      </Fade>
      <Fade direction="down"> 
      <article className="row" id="idea-two">
        <div>
          <h3>
            <p style={{ color: 'orange' }}>Our proposal</p>
          </h3>
          <p>
            <p style={{ color: 'orange' }}>
              The next step is for us to send you our client care documents.
              These will confirm our charges in writing and explain exactly where you stand
              with us and how we will work with you. The client care documents will break
              your case down into bite-size stages, with estimated charges.
            </p>
          </p>
        </div>
        <div>
          <img src="data:image/png;base64,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" alt="Image 2" />
        </div>
      </article>
      </Fade>

      <Fade direction="down">
      <article className="row" id="idea-three">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KstdQTiBqpewc5kASy7NvlhCjTrlEYaDhw&usqp=CAU" alt="Image 3" />
        </div>
        <div>
          <h3>
            <p style={{ color: 'hotpink' }}>Engaging us</p>
          </h3>
          <p>
            <p style={{ color: 'hotpink' }}>
              Once you agree to our client care documents, we will start work.
              This usually involves a review of your documents and an initial meeting with you
              to give you legal advice and practical guidance about next steps.
            </p>
          </p>
        </div>
      </article>
      </Fade>

      <Fade direction="down">
      <article className="row" id="idea-four">
        <div>
          <h3>
            <p style={{ color: 'yellow' }}>You get in touch</p>
          </h3>
          <p>
            <p style={{ color: 'yellow' }}>
              You can contact us by phone, email, or by using our contact form.
              If you have called, our Client Care team will usually be able to help you there and then.
              Otherwise, we will get back to you right away.
            </p>
          </p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S4kPAYkCXZO6wPKAH_7_awp83VAeBGdG0Q&usqp=CAU" alt="Image 4" />
        </div>
      </article>
      </Fade>

      <Fade direction="down">
      <article className="row" id="idea-five">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZtlVd3jmt6w1qmnNNcgckREXEMWmMLzYfWRJU5-okYapwBTuXMTyFRW8kiyBnd2mzXU&usqp=CAU" alt="Image 5" />
        </div>
        <div>
          <h3>
            <p style={{ color: 'red' }}>Follow up</p>
          </h3>
          <p>
            <p style={{ color: 'red' }}>
              After the initial chat, we will let you know whether you would benefit from a consultation with us as a client.
              We will also give you an indication of what the costs of the consultation are likely to be.
            </p>
          </p>
        </div>
      </article>
      </Fade>

      <Fade direction="down">
      <article className="row" id="idea-six">
        <div>
          <h2>
            <p className='font-bold text-2xl' style={{ color: 'darksalmon' }}>The best outcome for you</p>
          </h2>
          <p>
            <p style={{ color: 'darksalmon' }}>
              As your case progresses, we will keep you informed of any unexpected changes so that there are no unexpected fees.
              We will draft all correspondence, conduct any tribunal proceedings, and negotiate a successful conclusion on your behalf.
            </p>
          </p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmivEET0u_siLX6LeDWrwozz8qCyW6GkW3A&usqp=CAU" alt="Image 6" />
        </div>
      </article>
      </Fade>
      {/* Remaining articles */}



    </div>
        </>
    );
};

export default HowWork;