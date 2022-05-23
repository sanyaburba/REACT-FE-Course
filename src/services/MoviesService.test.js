import fetchMock from "jest-fetch-mock";
import {setupStore} from "../Redux/store";
import {moviesAPI} from "./MoviesService";
import {MovieMockData} from "../components/Helpers/MovieMockData";


beforeEach(()=> {
    fetchMock.resetMocks()
})

describe('testing RTK query work', () => {

    fetchMock.mockResponse(JSON.stringify({}))

    test("unsuccessful response", () => {
        const storeRef = setupStore(moviesAPI);
        fetchMock.mockResponse(JSON.stringify([MovieMockData]));

        return storeRef
            .dispatch(
            moviesAPI.endpoints.fetchAllMovies.initiate(undefined)
        )
            .then((action) => {
                const { status,isSuccess } = action;
                expect(status).toBe("rejected");
                expect(isSuccess).toBe(false);
            });
    });
})
