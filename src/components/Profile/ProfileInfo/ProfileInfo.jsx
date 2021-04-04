import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={s.profileInfoImg} src="https://www.goodfreephotos.com/cache/canada/alberta/jasper-national-park/scenic-landscape-with-clear-lake-mountains-jasper-national-park-albert-canada.jpg" />
      </div>
      <div className={s.descriptionBloc}>Ava + description</div>
    </div>
  );
};
export default ProfileInfo;
