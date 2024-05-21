"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@nextui-org/react";

import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
// import { useRef } from 'react';

export const Search = () => {
  // const formRef = useRef(null);

  const [value, setValue] = useState("");

  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
    console.log("Form submitted");
    console.log(value);

    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  //   const handleSubmit = () => {
  //     if (formRef.current) {
  //       formRef.current.submit();
  //     }
  //   };

  return (
    <>
      <form
        className="relative  w-full lg:w-[400px]  flex items-center"
        onSubmit={onSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 w-full">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          {value && (
            <X
              className=" realative h-5  text-slate-400
         w-5 text-muted-foreground cursor-pointer hover:opacity-70"
              onClick={onClear}
            />
          )}
        </label>

        <button
          type="submit"
          className="ml-[8px] btn-neutral"
          onClick={() => {
            console.log("TESTING");
          }}
        >
          <SearchIcon className="text-white opacity-80 h-6 w-6 text-muted-foreground p-0" />
        </button>
      </form>
    </>
  );
};
