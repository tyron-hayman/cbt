import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface BannerProps {
  title?: string;
  content?: string;
  hidden?: string;
}

export default function GlobalBanner({ title = "Title", content = "This is a banner alert", hidden = "hidden" }: BannerProps) {
  return (
    <div id="sticky-banner" className={`fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${hidden}`}>
    <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span>{content}</span>
        </p>
    </div>
</div>
  );
}