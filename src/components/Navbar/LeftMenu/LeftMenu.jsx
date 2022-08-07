import React, { useEffect, useState } from 'react';

const LeftMenu = () => {
  const [topCategories, setTopCategories] = useState([]);

  // DB와 연동 필요
  const loadTopCategories = async () => {
    setTimeout(() => {
      setTopCategories(['강의', '로드맵', '멘토링', '커뮤니티', '인프런']);
    }, 100);
  };

  useEffect(() => {
    (async () => {
      await loadTopCategories();
    })();
  });

  return (
    <>
      <ul className="flex-center-center">
        {topCategories &&
          topCategories.map((item, idx) => {
            return (
              <li key={idx} className="px-4 py-2">
                <a href="#" className="text-[#4a4a4a] hover:text-[#00c471] transition ease-out duration-150">
                  {item}
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default LeftMenu;
