import { ReactNode, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  svg {
    overflow: visible !important;
    height: 30px;
  }
  .content {
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 8px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
const Modal = ({
  children,
  isOpen,
  handleOpen,
  hasWrapper,
}: {
  children: ReactNode;
  isOpen?: boolean;
  handleOpen: Function;
  hasWrapper?: boolean;
}) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflowY = 'hidden';
      window.document.body.style.height = '100vh';
    }
  });
  function handleClose() {
    window.document.body.style.overflowY = 'scroll';
    window.document.body.style.height = 'auto';
    handleOpen();
  }
  return (
    <ModalWrapper className={`fixed inset-0`}>
      <div className="flex justify-center items-center h-full w-full relative">
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          className="h-7 cursor-pointer absolute top-8 right-2 sm:right-14"
          onClick={handleClose}
        />
        {!hasWrapper ? (
          children
        ) : (
          <div className="w-11/12 sm:w-4/5 h-4/5 bg-yellow m-auto content p-4 sm:p-8 lg:p-12 rounded-lg relative modal">
            {children}
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};
export { Modal };
