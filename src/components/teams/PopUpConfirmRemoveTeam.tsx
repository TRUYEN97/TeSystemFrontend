import { toast, ToastContainer } from "react-toastify";

import { Modal } from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import useRemoveUser from "../../hooks/api/users/use-remove-user";
import type { TeamType } from "../../types/teams";
import { useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import useRemoveTeam from "../../hooks/api/teams/use-remove-team";

type Props = {
  team: TeamType;
  isOpen: boolean;
  closeModal: () => void;
};

const PopConfirmRemoveT = ({ team, isOpen, closeModal }: Props) => {
  const removeTeam = useRemoveTeam();

  const [inputConfirm, setInputConfirm] = useState<string>();

  const handleRemoveTeam = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if(!inputConfirm || inputConfirm !== 'OK') {
      toast.error("Vui lòng xác nhận!", { autoClose: 1000 });
      return;
    }
    if (!team.id) {
      toast.error("Xóa thật bại, Vui lòng thử lại", { autoClose: 1000 });
      return;
    }
    await removeTeam.mutate(team.id);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <ToastContainer autoClose={1000}/>
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Xóa nhóm
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2">
            <div className="mt-7">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 pb-5">
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Tên nhóm
                  </p>
                  <p className="text-base font-medium text-gray-800 dark:text-white/90">
                    {`${team.departmentName}_${team.name}`}
                  </p>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-full">
                  <Label>
                    <span className="text-red-500">Nhập OK để xác nhận xóa</span>
                    <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={inputConfirm}
                    onChange={(e) => setInputConfirm(e.target.value)}
                    error
                  />
                </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Hủy
            </Button>
            <Button
              size="sm"
              className="bg-red-500 hover:bg-red-600"
              onClick={handleRemoveTeam}
            >
              Xóa
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PopConfirmRemoveT;
