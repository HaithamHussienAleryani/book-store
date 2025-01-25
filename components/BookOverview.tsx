import { Book } from "@/types/Book";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

function BookOverview({ book }: { book: Book }) {
  return (
    <section className="book-overview">
      <div className="flex flex-col gap-5">
        <h1>{book.title}</h1>
        <div className="book-info">
          <p>
            By{" "}
            <span className="text-light-200 font-semibold">{book.author} </span>
          </p>
          <p>
            Category{" "}
            <span className="text-light-200 font-semibold">{book.genre} </span>
          </p>
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{book.rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Total books <span>{book.total_copies}</span>
          </p>
          <p>
            Available books <span>{book.available_copies}</span>
          </p>
        </div>
        <p className="book-description">{book.description}</p>
        <Button className="book-overview_btn ">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">Borrow now</p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center ">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={book.color}
            coverImage={book.cover}
          />
          <div className="absolute blur-sm left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              className="z-10"
              coverColor={book.color}
              coverImage={book.cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookOverview;
