import { useEffect, useState } from "react"
import { Pokemon } from "../interfaces";


const localCache: any = {};


interface Data {
  data: Pokemon | null;
  isLoading: boolean;
  hasError: boolean;
  error: Error | null;
}



export const useFetch = (url: string = '') => {

  const [state, setState] = useState<Data>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFetch();
    // setState(...state, data)
  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    })
  }

  const getFetch = async () => {

    if (localCache[url]) {
      console.log('usando cache')
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      })
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    await new Promise(resolve => setTimeout(resolve, 500));
    const data: Pokemon = await resp.json();

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          name: resp.statusText,
          message: resp.statusText
        }
      })
      return;
    }

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })

    localCache[url] = data;
  }


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
