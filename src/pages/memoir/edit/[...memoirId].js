import KPTEdit from "@/components/KPT/KPTEdit";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  return (
    <>
        <KPTEdit
          memoirId={router.query.memoirId}
        />
    </>
  );
};

export default index;