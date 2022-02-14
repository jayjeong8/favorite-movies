import {useQuery} from "react-query";
import {Loader} from "../Components/Loader";
import {Wrapper, Banner, Title, Overview} from "../Styled/StyledHome"
import {makeImagePath} from "../utils";
import Row from "../Components/Row";
import {
    getTVAiringToday,
    getTVTopRated,
    getTVPopular,
    getTVOnTheAir,
    IGetContentsResult
} from "../api";
import BigContentModal from "../Components/BigContentModal";

function TV() {
    const {data, isLoading} = useQuery<IGetContentsResult>(
        ["TV", "topRatedTV"], getTVTopRated
    );

    return (
        <Wrapper>
            {isLoading ? (
                <Loader>Loading..</Loader>
            ) : (
                <>
                    <Banner
                        bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
                    >
                        <Title>{data?.results[0].name}</Title>
                        <Overview>{data?.results[0].overview}</Overview>
                    </Banner>
                    <Row
                        queryKeyName1={"TV"}
                        queryKeyName2={"airingToday"}
                        getApi={getTVAiringToday}
                        rowTitle={"Airing Today"}
                    />
                    <Row
                        queryKeyName1={"TV"}
                        queryKeyName2={"topRatedTV"}
                         getApi={getTVTopRated}
                         rowTitle={"Top Rated"}
                    />
                    <Row
                        queryKeyName1={"TV"}
                        queryKeyName2={"popularTV"}
                         getApi={getTVPopular}
                         rowTitle={"Popular"}
                    />
                    <Row
                        queryKeyName1={"TV"}
                        queryKeyName2={"onTheAir"}
                         getApi={getTVOnTheAir}
                         rowTitle={"On The Air"}
                    />

                    <BigContentModal media="tv"/>
                </>
            )}
        </Wrapper>
    );
}

export default TV;