import React, { useEffect, useState } from 'react';

interface IUseInfiniteScroll {
  originalList: any[] | undefined;
}

const useInfiniteScroll = ({ originalList }: IUseInfiniteScroll) => {
  const [wholeList, setWholeList] = useState<any[] | undefined>(originalList);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [observingList, setObservingList] = useState<any[]>();
  const [observedIdx, setObservedIdx] = useState<number>(0);
  let observer: IntersectionObserver | null | undefined;

  useEffect(() => {
    if (!wholeList) return;
    console.log('whole list: ', wholeList);
    setObservingList(wholeList.slice(0, 10));
    setObservedIdx(10);
  }, [wholeList]);

  const addMoreObservingItems = () => {
    setIsLoaded(false);

    let lastIdx = observedIdx + 10;

    if (lastIdx >= wholeList!.length) {
      lastIdx = wholeList!.length;
    }

    const moreVotes = wholeList && wholeList.slice(observedIdx, lastIdx);
    setObservingList((observingItem) =>
      observingItem?.concat(moreVotes ? moreVotes : []),
    );

    setTimeout(() => {
      setIsLoaded(true);
    }, 1 * 1000);

    setObservedIdx(observedIdx + 10);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer,
  ) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      addMoreObservingItems();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (!document.querySelector('#observer-target')) return;

    observer = new IntersectionObserver(onIntersect, { threshold: 1 });
    observer.observe(document.querySelector('#observer-target') as HTMLElement);

    return () => {
      observer && observer.disconnect();
    };
  }, [document.querySelector('#observer-target')]);

  return { isLoaded, observingList, setOriginalList: setWholeList };
};

export default useInfiniteScroll;
