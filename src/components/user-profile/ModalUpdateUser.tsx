import { useRef, useState, type ChangeEvent } from "react";

import { Modal } from "../ui/modal/Modal";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Button from "../ui/button/Button";
import useUpdateUser from "../../hooks/api/users/use-update-user";
import type { UserType } from "../../types/users";
import { toast, ToastContainer } from "react-toastify";
import MultiSelect from "../form/MultiSelelect";
import useGetTeams from "../../hooks/api/teams/use-get-teams";
import type { TeamType } from "../../types/users";

type Props = {
  user: UserType;
  isOpen: boolean;
  closeModal: () => void;
};

type UserInputData = {
  name?: string;
  email?: string;
  teams?: TeamType[];
};

const ModalUpdateUser = ({ user, isOpen, closeModal }: Props) => {
  const updateMutation = useUpdateUser();
  const { data: teams } = useGetTeams();

  const [inputData, setInputData] = useState<UserInputData>({
    name: user.name,
    email: user.email,
    teams: user.teams,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const verifyData = () => {
    if (!inputData?.name || !inputData.email) {
      toast("Không để trống dữ liệu!", { type: "error" });
      return false;
    }
    if (inputData.name === user.name && inputData.email === user.email) {
      toast("Không thay đổi dữ liêu nào!", { type: "warning" });
      return false;
    }
    return true;
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!verifyData()) return;

    const data = {
      name: inputData?.name || "",
      email: inputData?.email || "",
    };
    updateMutation.mutate({ id: user.id, data });
    closeModal();
  };

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
              <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                Thông tin cá nhân       
              </h5>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 pb-20">
                <div className="col-span-2 lg:col-span-full">
                  <Label>Họ và tên</Label>
                  <Input
                    type="text"
                    name="name"
                    value={inputData?.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-span-2 lg:col-span-full">
                  <Label>Email </Label>
                  <Input
                    type="email"
                    name="email"
                    value={inputData?.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-span-2 lg:col-span-full">
                  <MultiSelect
                    label="Teams"
                    defaultSelected={inputData.teams?.map((team: TeamType) => {
                      return team.id;
                    })}
                    options={teams?.data.data.map((team: TeamType) => {
                      return {
                        value: team.id,
                        text: team.name,
                      };
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Close
            </Button>
            <Button size="sm" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalUpdateUser;
