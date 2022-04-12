import { useRouter } from 'next/router';
import styled from 'styled-components';

const ListWards = [
  {
    name: 'Times food Awards, Best North Indian, Punjab Grill Bangalore 2017',
    time: '2017',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    thumnailUrl: '5.jpg',
  },
  {
    name: 'Callebaut Food Food awards, Best South Indian Restaurant (Standalone), Zambar 2018',
    time: '2018',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    thumnailUrl: '1.jpg',
  },
  {
    name: 'Dinning Singapore Tatler, Best Restaurant 2019',
    time: '2019',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    thumnailUrl: '2.jpg',
  },
  {
    name: 'The Best Restaurants in Hawai‘i',
    time: '2019',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    thumnailUrl: '3.jpg',
  },
  {
    name: 'MenuLog Restaurant Award',
    time: '2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    thumnailUrl: '4.jpg',
  },
];
const AwardsWrapper = styled.div``;
const AwardComponentWrapper = styled.div`
  img {
    max-height: 300px;
  }
`;
const AwardComponent = ({ awardDetail }: { awardDetail: any }) => {
  const router = useRouter();
  const ImgBaseUrl = `${router.basePath}/assets/images`;
  return (
    <AwardComponentWrapper className="flex flex-col sm:flex-row text-black justify-between items-start p-5 sm:p-8">
      <div className="w-full sm:w-2/5 mb-5 sm:mb-0">
        <img
          src={`${ImgBaseUrl}/awards/${awardDetail.thumnailUrl}`}
          className="object-contain mx-auto"
        />
      </div>
      <div className="w-full sm:w-3/5 sm:pl-6 ">
        <h3 className="text-black font-semibold text-xl">{awardDetail.name}</h3>
        <span className="text-black font-medium italic text-mb">
          {awardDetail.time}
        </span>
        <p className="text-black mt-5">{awardDetail.description}</p>
      </div>
    </AwardComponentWrapper>
  );
};
const Awards = () => {
  return (
    <AwardsWrapper>
      <h3 className="text-xl sm:text-2xl text-green mb-4 text-center font-semibold capitalize">
        Award&apos;s restaurant list
      </h3>
      {ListWards.map((award, id) => {
        return (
          <div
            key={id}
            className="bg-white rounded-lg border-2 border-green my-10"
          >
            <AwardComponent awardDetail={award} />
          </div>
        );
      })}
    </AwardsWrapper>
  );
};
export default Awards;
