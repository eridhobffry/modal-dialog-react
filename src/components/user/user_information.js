import React from "react";
import PropTypes from "prop-types";
import { useModalWithData } from "../../main/hooks";
import CustomModal from "../modal/modal";
import UserDetail from "./user_detail";
import UserTable from "./user_table";

const UserInformation = data => {
  const {
    modalOpen,
    selected,
    setSelected,
    setModalState
  } = useModalWithData();

  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <CustomModal
          title={"User Detail"}
          isActive={modalOpen}
          handleClose={() => setModalState(false)}
        >
          <UserDetail data={selected} />
        </CustomModal>

        <UserTable
          data={data}
          setSelected={setSelected}
          setModalState={setModalState}
        />
      </div>
    </div>
  );
};

UserInformation.propTypes = {
  data: PropTypes.array.isRequired
};

export default UserInformation;
