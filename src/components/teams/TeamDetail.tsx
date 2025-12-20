import { Tag } from "antd";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";

import { useModal } from "../../hooks/component/modal/use-modal";
import type { TeamType } from "../../types/teams";
import ModalUpdateTeam from "./ModalUpdateTeam";

type Props = {
  team: TeamType;
};

const TeamDetail = ({ team }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const [isOpenPopUp, setOpenPopUp] = useState(false);

  const handleClosePopUp = () => {
    setOpenPopUp(false);
  };

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Thông tin
          </h4>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Tên nhóm
              </p>
              <p className="text-base font-medium text-gray-800 dark:text-white/90">
                {team?.name}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phòng ban
              </p>
              <p className="text-base font-medium text-gray-800 dark:text-white/90">
                {team?.departmentName}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <TiPencil />
            Chỉnh sửa
          </button>
          <button
            onClick={() => setOpenPopUp(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-red-500 hover:bg-red-100 px-4 py-3 text-base font-medium text-red-500 shadow-theme-xslg:inline-flex lg:w-auto"
          >
            <FaRegTrashCan className="text-red-500" />
            Xóa
          </button>
        </div>
      </div>

      {/* <PopConfirmRemoveUser
        user={user}
        isOpen={isOpenPopUp}
        closeModal={handleClosePopUp}
      /> */}
      <ModalUpdateTeam team={team} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default TeamDetail;
