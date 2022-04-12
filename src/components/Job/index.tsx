import styled from 'styled-components';

const JobWrapper = styled.div`
  button:hover,
  button:active {
    background: var(--color-green) !important;
    transition: all 0.3s linear;
    text-shadow: 1px 0px 0px #fff;
  }
`;
const JobItem = () => {
  return (
    <JobWrapper className="w-full py-5 border-b border-yellow">
      <div className="flex justify-between items-center flex-wrap">
        <span className="text-lg md:text-xl font-semibold w-10 md:w-12 lg:w-14">
          01
        </span>
        <div className="sm:px-3 flex-1 sm:w-3/5 lg:w-2/5">
          <h3 className="text-lg md:text-xl font-semibold pb-5">Enquery</h3>
          <div className="flex justify-between">
            <span className="mr-4 text-xs md:text-sm lg:text-base">
              Salary: 500$ - 1000$
            </span>
            <span className="text-xs md:text-sm lg:text-base">
              Exp: 1+ years
            </span>
          </div>
        </div>
        <div className="w-full sm:flex-1 flex justify-end flex-wrap flex-row mt-8 sm:mt-0">
          <button className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-yellow mr-4 rounded-lg cursor-pointer text-xs sm:text-sm lg:text-base">
            Detail
          </button>

          <button className="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-yellow rounded-lg cursor-pointer text-xs sm:text-sm lg:text-base">
            Apply
          </button>
        </div>
      </div>
    </JobWrapper>
  );
};
export default JobItem;
