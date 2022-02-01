import React, { useEffect, useState } from 'react';

interface IUseInfiniteScroll {
  originalList: any[];
}

const useInfiniteScroll = ({ originalList }: IUseInfiniteScroll) => {
  const [wholeList, setWholeList] = useState<any[]>(originalList);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [observingList, setObservingList] = useState<any[]>([]);
  const [observedIdx, setObservedIdx] = useState<number>(0);
  let observer: IntersectionObserver | null | undefined;

  useEffect(() => {
    if (wholeList.length === 0) return;
    setIsLoaded(false);
    console.log('Whole List chaged ', wholeList);
    setObservingList([]);
  }, [wholeList]);

  useEffect(() => {
    if (observingList.length !== 0) return; // /votes 에서 탭했을 때 초기화를 위해,,

    if (wholeList.length >= 10) {
      setObservingList(wholeList.slice(0, 10));
      setObservedIdx(10);
    } else {
      setObservingList(wholeList.slice(0, wholeList!.length));
      setObservedIdx(wholeList!.length);
    }

    setTimeout(() => {
      setIsLoaded(true);
    }, 5 * 1000);
  }, [observingList]);

  useEffect(() => {
    console.log('Observed Idx Changed!! : ', observedIdx);
  }, [observedIdx]);

  const addMoreObservingItems = async () => {
    if (wholeList.length === 0) return;
    setIsLoaded(false);
    console.log('===================================');
    console.log('Observed Idx : ', observedIdx);

    let lastIdx = observedIdx + 10;
    if (lastIdx === 10) lastIdx = 20;
    console.log('Last Index1: ', lastIdx);

    if (lastIdx >= wholeList.length) {
      lastIdx = wholeList.length;
    }

    console.log('Last Index2: ', lastIdx);
    console.log('Whole List Size: ', wholeList.length);
    console.log('===================================');
    const moreVotes = wholeList && wholeList.slice(observedIdx, lastIdx);
    setObservingList((observingItem) =>
      observingItem?.concat(moreVotes ? moreVotes : []),
    );

    if (lastIdx < wholeList.length) {
      setObservedIdx(lastIdx);
    } else {
      setObservedIdx(wholeList!.length);
    }

    setTimeout(() => {
      setIsLoaded(true);
    }, 1 * 1000);
    await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer,
  ) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await addMoreObservingItems();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    console.log(
      '########################################  hi  ################################################',
    );

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
