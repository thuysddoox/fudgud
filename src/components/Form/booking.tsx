import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { FormWrapper } from '.';

const BookingWrapper = styled.div`
  .btn-submit:hover,
  .btn-active {
    background: var(--color-green) !important;
    color: #ffff !important;
  }
  @media screen and (max-width: 560px) {
    .mb-w-full {
      width: 100% !important;
    }
  }
`;
const Booking = () => {
  const optionsDate: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  // const optionsTime: any = {
  //   minute: "numeric",
  //   hour: "numeric",
  //   second: "numeric",
  // };
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <BookingWrapper>
      <h3 className="text-center font-semibold text-xl text-red mt-3 mb-10 mx-5">
        Make A Booking
      </h3>
      <FormWrapper>
        <form className="mb-w-full w-11/12 sm:w-4/5 mx-auto">
          <div className="m-6 flex justify-between">
            <input
              type="text"
              placeholder="Select Time"
              min="8:00"
              max="21:00"
              pattern="[0-9]{2}:[0-9]{2}"
              required
              className={`w-52 px-3 py-2 rounded-xl text-black text-center`}
              onFocus={(e) => {
                e.currentTarget.type = 'time';
              }}
              // onBlur={(e) =>{e.currentTarget.type='text'; }}
            />
            <input
              type="text"
              placeholder="Select Date"
              required
              className={`ml-5 flex-1 px-3 py-2 rounded-xl text-black`}
              onFocus={(e) => {
                e.currentTarget.type = 'date';
              }}
              onBlur={(e) => {
                e.currentTarget.type = 'text';
                e.currentTarget.value = e.currentTarget.value
                  ? new Date(e.currentTarget.value).toLocaleDateString(
                      'en-US',
                      optionsDate
                    )
                  : '';
              }}
            />
          </div>
          <div className="m-6 flex justify-between">
            <div className="w-1/2 pr-5">
              <input
                type="text"
                placeholder="Your Fullname"
                className={`w-full px-3 py-2 rounded-xl text-black`}
              />
            </div>
            <div className="w-1/2 ">
              <input
                type="phone"
                placeholder="Your Phone Number"
                className={` w-full px-3 py-2 rounded-xl text-black`}
              />
            </div>
          </div>
          <div className="m-6">
            <textarea
              placeholder="Note"
              className={`w-full px-3 py-2 rounded-xl text-black h-40`}
            ></textarea>
          </div>
          <div className="m-6 flex justify-center items-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              hl={'en'}
              onChange={() => setIsDisabled(!isDisabled)}
            />
          </div>
          <div className="m-6 flex justify-center items-center">
            <input
              type="submit"
              name="book"
              value="Book"
              className={`px-7 py-2 rounded-3xl text-yellow font-medium btn-submit transition-all ${
                isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              }`}
              // onClick={handleSubmit}
            />
          </div>
        </form>
      </FormWrapper>
    </BookingWrapper>
  );
};
export default Booking;
