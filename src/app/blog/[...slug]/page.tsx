import React from "react";
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Comment from "@/shared/Comment";
import SocialsList from "@/shared/SocialsList";
import Textarea from "@/shared/Textarea";
import Image from "next/image";
import travelhero2Image from "@/images/travelhero2.png";
import Link from "next/link";
import { Route } from "@/routers/types";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="/blog" color="purple" name="Traveler" />
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            Giữ vững tinh thần mong muốn đi du lịch vòng quanh thế giới
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
          Chúng tôi là một tạp chí trực tuyến dành riêng để đưa tin về những điều tốt nhất trong
            thiết kế sản phẩm quốc tế. Chúng tôi bắt đầu như một blog nhỏ trở lại
            2002 bao gồm công việc của sinh viên và theo thời gian
          </span>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-baseline sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <a className="block font-semibold" href="/">
                    Fones Mimi
                  </a>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                  20 Tháng Năm, 2024
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                  6 phút trước
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        <p>
        Như bạn có thể thấy, phần văn bản ban đầu là văn bản mẫu 'Lorem ipsum', thường được sử dụng trong thiết kế và in ấn để tạo ra các đoạn văn bản không có nghĩa rõ ràng. Nếu bạn muốn dịch chính xác hơn cho một nội dung khác, vui lòng cung cấp văn bản cụ thể hơn.
        </p>
        {/* <p>
          It is a long established fact that a <strong>reader</strong> will be
          distracted by the readable content of a page when looking at its{" "}
          <strong>layout</strong>. The point of using Lorem Ipsum is that it has
          a more-or-less normal{" "}
          <a href="/#" target="_blank" rel="noopener noreferrer">
            distribution of letters.
          </a>{" "}
        </p> */}

        <p>
          Một thực tế đã được thiết lập từ lâu là <strong>người đọc</strong> sẽ bị
          phân tâm bởi nội dung dễ đọc trên trang khi nhìn vào{" "}
          <strong>bố cục</strong> của nó. 
          Mục đích của việc sử dụng Lorem Ipsum là nó có sự phân bố các chữ cái gần như bình thường. 
          <a href="/#" target="_blank" rel="noopener noreferrer">
              phân bố các chữ cái.
          </a>{" "}
        </p>

        <ol>
          <li>Chúng tôi muốn mọi thứ trông đẹp ra khỏi hộp.</li>
          <li>
            {` Thực sự chỉ là lý do đầu tiên, đó là toàn bộ điểm của plugin.`}
          </li>
          <li>
            {`   Đây là một lý do giả vờ thứ ba, mặc dù một danh sách với ba mục trông
            Thực tế hơn một danh sách với hai mục.`}
          </li>
        </ol>
        <h3>Typography nên dễ dàng</h3>
        <p>
          {`Vì vậy, đó là một tiêu đề cho bạn - với bất kỳ may mắn nào nếu chúng tôi đã hoàn thành công việc của mình
          Chính xác sẽ trông khá hợp lý.`}
        </p>
        <p>Một điều mà một người khôn ngoan đã từng nói với tôi về kiểu chữ là:</p>
        <blockquote>
          <p>
            {` Typography là khá quan trọng nếu bạn không muốn công cụ của bạn để nhìn
            như rác. Làm cho nó tốt sau đó nó sẽ không xấu.`}
          </p>
        </blockquote>
        <p>
          {`        Có lẽ điều quan trọng là hình ảnh trông ổn ở đây theo mặc định:`}
        </p>
        <figure>
          <Image src={travelhero2Image} alt="blog" className="rounded-2xl" />
          <figcaption>
          Lorem ipsum dolor, ngồi amet consectetur adipisicing elit. Quyền hạn hoặc nhiệm vụ chính thức đặt vào một chỗ không thể phủ nhận với nỗi đau hoặc thay đổi được cảm nhận rõ rệt, sự khác biệt về sự thật khôn ngoan.
          </figcaption>
        </figure>
        <p>
          {` Bây giờ tôi sẽ chỉ cho bạn một ví dụ về một danh sách không có thứ tự để đảm bảo
          Điều đó cũng có vẻ tốt:`}
        </p>
        <ul>
          <li>Vì vậy, đây là mục đầu tiên trong danh sách này.</li>
          <li>{`Trong ví dụ này, chúng tôi đang giữ các mục ngắn.`}</li>
          <li>{`Sau đó, chúng ta sẽ sử dụng các mục danh sách dài hơn, phức tạp hơn.`}</li>
        </ul>
        <p>{`Và đó là phần cuối của phần này.`}</p>
        <h2>Mã sẽ trông ổn theo mặc định.</h2>
        <p>
        Tôi nghĩ hầu hết mọi người sẽ sử dụng{" "}
          <a href="https://highlightjs.org/">highlight.js</a> or{" "}
          <a href="https://prismjs.com/">Prism</a>{" "}
          {`hoặc một cái gì đó nếu họ muốn
          tạo kiểu cho các khối mã của họ nhưng sẽ không hại gì khi làm cho chúng trông`}{" "}
          <em>okay</em> ra khỏi hộp, ngay cả khi không có tô sáng cú pháp.
        </p>
        <p>
          {`   Những gì tôi đã viết ở đây có lẽ đủ dài, nhưng thêm phần cuối cùng này
          Câu không thể làm tổn thương.`}
        </p>

        <p>Hy vọng rằng điều đó có vẻ đủ tốt cho bạn.</p>
        <h3>Tuy nhiên, chúng ta vẫn cần phải suy nghĩ về các tiêu đề xếp chồng lên nhau.</h3>

        <p>
        Phew, với bất kỳ may mắn nào, chúng tôi đã tạo kiểu cho các tiêu đề phía trên văn bản này và
        Họ trông khá tốt.
        </p>
      </div>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-md mx-auto flex flex-wrap">
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Vườn
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Trang sức
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Công cụ
        </a>
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <Avatar sizeClass="w-11 h-11 md:w-24 md:h-24" />
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
            VIẾT BỞI
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <a href="/">Thiên Liên Hoa</a>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
            Không có gì ngăn cản gã khổng lồ công nghệ. Apple hiện mở cửa thứ 100
            Không thể ngăn cản gã khổng lồ công nghệ.
              <a className="text-primary-6000 font-medium ml-1" href="/">
              Đọc thêm
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return (
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Bình luận (14)
        </h3>
        <form className="nc-SingleCommentForm mt-5">
          <Textarea />
          <div className="mt-2 space-x-3">
            <ButtonPrimary>Đăng</ButtonPrimary>
            <ButtonSecondary>Hủy</ButtonSecondary>
          </div>
        </form>
      </div>
    );
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        <ul className="nc-SingleCommentLists space-y-5">
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  const renderPostRelated = (post: PostDataType) => {
    return (
      <div
        key={post.id}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={post.href as Route} />
        <Image
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={post.featuredImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name="Categories" />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{post.title}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.author.displayName}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">{post.date}</span>
          </div>
        </div>
        <Link href={post.href as Route} />
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      {renderHeader()}
      <div className="container my-10 sm:my-12 ">
        <Image className="w-full rounded-xl" src={travelhero2Image} alt="" />
      </div>

      <div className="nc-SingleContent container space-y-10">
        {renderContent()}
        {renderTags()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {renderAuthor()}
        {renderCommentForm()}
        {renderCommentLists()}
      </div>
      <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
        <div className="container ">
          <h2 className="text-3xl font-semibold">Bài viết liên quan</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/*  */}
            {DEMO_POSTS.filter((_, i) => i < 4).map(renderPostRelated)}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
