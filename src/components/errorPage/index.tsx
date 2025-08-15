import IMG_404 from '../../assets/404.avif';

import './errorPage.css';

export const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={IMG_404} alt="error 404" />
    </div>
  );
};
