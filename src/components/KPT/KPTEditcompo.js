import { useRouter } from "next/router";
import React from "react";
import KPTEdit from "./KPTEdit";

const KPTEditcompo = () => {
  const router = useRouter();
  return (
    <>
      <KPTEdit memoirId={router.query.memoirId} />
    </>
  );
};

export default KPTEditcompo;
