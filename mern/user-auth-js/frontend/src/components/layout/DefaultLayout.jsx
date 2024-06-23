import React, { useEffect } from "react";
import Header from './Header'


export default function DefaultLayout({ children }) {
  // const { projectId } = useParams();
  // const dispatch = useDispatch();
  // const [cookies] = useCookies(["auth"]);
  // useEffect(() => {
  //   cookies?.token && projectId && dispatch(getProjectPermission(projectId));
  //   cookies?.token && dispatch(getPermissionMenuService());
  // }, [projectId]);
  return (
    <>
      <div className="">
        <Header />
        {/* <Breadcrumbs />
        <SubHeader /> */}
      </div>
      {children}
      {/* <Footer /> */}
    </>
  );
}
