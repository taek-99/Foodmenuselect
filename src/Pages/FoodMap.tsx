import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TopNavBar from "../Section/TopNavBar";
import Main from "../Section/Main";

declare global {
  interface Window {
    naver: any;
  }
}

function FoodMap() {
    const {name} = useParams<{name: string}>();
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    if (!mapRef.current || !window.naver?.maps) return;

    const center = new window.naver.maps.LatLng(37.5666103, 126.9783882);

    const map = new window.naver.maps.Map(mapRef.current, {
      center,
      zoom: 15,
    });

    new window.naver.maps.Marker({
      position: center,
      map,
      title: name ?? "",
    });

  }, [name]);

    return (
        <Container>
            <TopNavBar/>
            <Main/>
            <h2>{name} 지도다</h2>  

            <div
                ref={mapRef}
                id="map"
                style={{width: "100%", height: "420px", borderRadius: 12}}
            />
        </Container>
    );
}


export default FoodMap;