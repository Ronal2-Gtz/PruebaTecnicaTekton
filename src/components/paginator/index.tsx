import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

import './paginator.css';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  return (
    <div className="paginator">
      <button
        className="paginator__button"
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        <AiFillCaretLeft />
      </button>
      <span className="paginator__text">Página {currentPage}</span>
      <button
        className="paginator__button"
        onClick={onNext}
        disabled={currentPage >= totalPages}
      >
        <AiFillCaretRight />
      </button>
    </div>
  );
};
