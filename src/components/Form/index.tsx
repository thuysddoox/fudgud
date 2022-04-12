import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import useForm from './useForm';
import validate from './validateRules';

export const FormWrapper = styled.div`
  .btn-submit.cursor-pointer:hover,
  .btn-active {
    background: var(--color-green) !important;
    color: #ffff !important;
  }
  textarea {
    resize: none !important;
  }
  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 60px #ffff inset !important;
    }
  }
  input:focus-visible,
  textarea:focus-visible {
    border-color: var(--color-green) !important;
    box-shadow: inset 0 0 0 1px var(--color-green), 0 0 4px 3px #02fc7f;
    outline: none;
  }
  input.danger,
  textarea.danger {
    border-color: #ff4444 !important;
    box-shadow: 0 0 5px 4px rgba(248, 6, 6, 0.973) !important;
  }

  .toast {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);
    z-index: 9;
  }
  @media screen and (max-width: 560px) {
    .mb-w-full {
      width: 100% !important;
    }
  }
  .max-w-500 {
    max-width: 500px;
    text-overflow: ellipsis;
  }
`;
const Form = ({ hasFile }: { hasFile?: boolean }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  function sendData(data: any) {
    let formData = new FormData();
    formData = { ...data };
    console.log(formData);
  }
  const { values, errors, handleSubmit, handleChange } = useForm(
    validate,
    sendData
  );

  return (
    <FormWrapper>
      <h3 className="text-center font-semibold text-xl text-red mt-3 mb-10 mx-5">
        Send Us A Message
      </h3>
      <form className="mb-w-full w-11/12 sm:w-4/5 mx-auto">
        <div className="m-6">
          <input
            type="text"
            name="name"
            value={values?.name ?? ''}
            placeholder="Name"
            onChange={handleChange}
            required
            className={`w-full px-3 py-2 rounded-xl text-black ${
              errors?.name ? 'danger' : ''
            }`}
          />
          {errors?.name && (
            <p className="text-sm pt-2 text-red">{errors.name}</p>
          )}
        </div>
        <div className="m-6">
          <input
            type="phone"
            required
            name="phone"
            value={values?.phone ?? ''}
            placeholder="Phone Number"
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-xl text-black ${
              errors?.phone ? 'danger' : ''
            }`}
          />
          {errors?.phone && (
            <p className="text-sm pt-2 text-red">{errors.phone}</p>
          )}
        </div>
        <div className="m-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values?.email ?? ''}
            onChange={handleChange}
            required
            className={`w-full px-3 py-2 rounded-xl text-black ${
              errors?.email ? 'danger' : ''
            }`}
          />
          {errors?.email && (
            <p className="text-sm pt-2 text-red">{errors.email}</p>
          )}
        </div>
        <div className="m-6">
          <textarea
            name="message"
            placeholder="Message"
            value={values?.message ?? ''}
            onChange={handleChange}
            required
            className={`w-full px-3 py-2 rounded-xl text-black h-40 ${
              errors?.message ? 'danger' : ''
            }`}
          ></textarea>
          {errors?.message && (
            <p className="text-sm pt-2 text-red">{errors.message}</p>
          )}
        </div>
        <div className="m-6 flex justify-between items-center flex-wrap">
          {hasFile && (
            <>
              <input
                type="file"
                name="file"
                id="file"
                value=""
                onChange={handleChange}
                className="px-7 py-2 rounded-3xl text-yellow font-medium cursor-pointer btn-submit transition-all hidden"
              />
              <label
                htmlFor="file"
                className="px-7 py-2 text-yellow font-medium cursor-pointer bg-white rounded-3xl border border-yellow"
              >
                Attach your CV
              </label>
            </>
          )}
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            hl={'en'}
            onChange={() => setIsDisabled(!isDisabled)}
          />
          <div className="m-6 flex justify-center items-center w-full">
            <input
              type="submit"
              name="send"
              value="Send"
              className={`px-7 py-2 rounded-3xl text-yellow font-medium btn-submit transition-all ${
                isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              }`}
              onClick={handleSubmit}
              disabled={isDisabled}
            />
          </div>
        </div>
      </form>
    </FormWrapper>
  );
};
export default Form;
