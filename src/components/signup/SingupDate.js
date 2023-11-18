import { signupDayAtom } from "@/store/atoms";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const SingupDate = () => {
  const [form, setForm] = useRecoilState(signupDayAtom);
  const now = new Date();
  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }
  let months = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      months.push("0" + m.toString());
    } else {
      months.push(m.toString());
    }
  }
  let days = [];
  let date = new Date(form.year, form.month, 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      days.push("0" + d.toString());
    } else {
      days.push(d.toString());
    }
  }
  return (
    <>
      <select
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
        className="w-1/5 h-10 text-center bg-transparent"
      >
        {years.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        value={form.month}
        onChange={(e) => setForm({ ...form, month: e.target.value })}
        className="w-1/5 h-10 text-right pr-2 bg-transparent"
      >
        {months.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        value={form.day}
        onChange={(e) => setForm({ ...form, day: e.target.value })}
        className="w-1/5 h-10 text-right pr-2 bg-transparent"
      >
        {days.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default SingupDate;
