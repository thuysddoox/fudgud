import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ChefDetailWrapper = styled.div`
  svg {
    overflow: visible !important;
    height: 18px;
  }
  .socials svg {
    height: 13px;
  }
  img {
    max-height: 400px;
    object-fit: contain !important;
    background: rgba(0, 0, 0, 0.3);
  }
  a:hover {
    span {
      color: var(--color-red) !important;
      transition: all 0.3s linear;
    }
    path {
      fill: var(--color-red) !important;
      transition: all 0.3s linear;
    }
  }
`;
const ChefDetailComponent = ({ chef }: { chef: any }) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images/chefs`;
  return (
    <ChefDetailWrapper className="border border-yellow rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <img
          src={`${ImgBaseUrl}/${chef.thumnailUrl}`}
          className="w-full mx-auto sm:w-1/2 object-contain object-center"
        />
        <div className="w-full w-1/2 pt-6 sm:pt-0 sm:pl-6 ">
          <h3 className="font-medium text-xl">{chef.name}</h3>
          <span className="text-sm text-gray-300 italic">{chef.position}</span>
          <div className="flex mt-3 py-2 socials">
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="xs" />
            </a>
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="xs" />
            </a>
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xs" />
            </a>
            <a
              className="flex items-center justify-start pr-3 cursor-pointer"
              href="mailto:dothuy302000@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="xs" />
            </a>
          </div>
          <ul className="flex flex-wrap mt-3 items-center justify-start">
            <li className="cursor-pointer mr-6">
              <a
                className="flex items-center justify-start py-2 text-mb"
                href="https://goo.gl/maps/cdQja1MZ3RP9N9u58"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />
                <span className="pl-2">Hanoi, VietNam</span>
              </a>
            </li>
            <li className="cursor-pointer mr-6">
              <a
                className="flex items-center justify-start py-2 text-mb"
                href="tel:0977002602"
              >
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  size="xs"
                  transform={{ rotate: -42 }}
                />
                <span className="pl-2">+0977002602</span>
              </a>
            </li>
            <li className="cursor-pointer mr-6">
              <a
                className="flex items-center justify-start py-2 text-mb"
                href="mailto:dothuy302000@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xs" />

                <span className="pl-2">dothuy302000@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="font-semibold uppercase text-xl">About {chef.name}</h3>
        <div
          className="description text-base mt-6"
          dangerouslySetInnerHTML={{
            __html: `${
              chef?.description ?? `No description about ${chef.name}`
            }`,
          }}
        ></div>
      </div>
    </ChefDetailWrapper>
  );
};
export default ChefDetailComponent;
