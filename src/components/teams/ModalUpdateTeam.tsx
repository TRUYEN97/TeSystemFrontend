import { toast, ToastContainer } from "react-toastify";
import { useState, type ChangeEvent } from "react";

import { Modal } from "../ui/modal/Modal";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Button from "../ui/button/Button";
import type { TeamType } from "../../types/teams";
import useUpdateTeam from "../../hooks/api/teams/use-update-team";

type Props = {
  team: TeamType;
  isOpen: boolean;
  closeModal: () => void;
};

type InputDataType= {
  name?: string
}

const ModalUpdateTeam = ({ team, isOpen, closeModal }: Props) => {
  const mutation = useUpdateTeam();

  const [inputData, setInputData] = useState<InputDataType>({
    name: team.name 
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputData(prev => {
      return {
        ...prev, 
        [name]: value
      }
    })
  }

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if(!inputData.name) {
      toast.error("Không để trống tên");
      return;
    }

    mutation.mutate({
      id: team.id,
      data: {
        name: inputData.name
      }
    })
    closeModal();
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <ToastContainer />
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Chỉnh sửa thông tin
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2 pb-3">
            <div className="mt-7">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 pb-20">
                <div className="col-span-2 lg:col-span-full">
                  <Label>Tên nhóm</Label>
                  <Input
                    type="text"
                    name="name"
                    value={inputData?.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Đóng
            </Button>
            <Button size="sm" onClick={handleSave}>
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalUpdateTeam;
