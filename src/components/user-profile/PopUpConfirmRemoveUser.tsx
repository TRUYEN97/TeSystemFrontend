import { toast} from "react-toastify";

import { Modal } from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import type { UserType } from "../../types/users";
import useRemoveUser from "../../hooks/api/users/use-remove-user";

type Props = {
  user: UserType;
  isOpen: boolean;
  closeModal: () => void;
};

const PopConfirmRemoveUser = ({ user, isOpen, closeModal }: Props) => {
  const removeUser = useRemoveUser();

  const handleRemoveUser = async () => {
    if (!user.id) {
      toast.error("Xóa thật bại, Vui lòng thử lại", { autoClose: 1000 });
      return;
    }
    await removeUser.mutate(user.id);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Xóa người dùng
          </h4>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar overflow-y-auto px-2">
            <div className="mt-7">
              <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                Thông tin cá nhân
              </h5>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 pb-20">
                <div className="col-span-2 lg:col-span-full">
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Họ và tên
                  </p>
                  <p className="text-base font-medium text-gray-800 dark:text-white/90">
                    {user?.name}
                  </p>
                </div>

                <div className="col-span-2 lg:col-span-full">
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-base font-medium text-gray-800 dark:text-white/90">
                    {user?.email}
                  </p>
                </div>
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
              onClick={handleRemoveUser}
            >
              Xóa
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PopConfirmRemoveUser;
