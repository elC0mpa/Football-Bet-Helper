import {Spin} from "antd";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/store";
import {fetchFixtures} from "../../store/fixturesSlice";
import { Head2Head } from "./../../types/Fixture";
import FixtureItem from "./FixtureItem";
import HeadToHeadModal from "./HeadToHeadModal";
import {FixturesContainer} from "./styled";

const Fixtures = () => {
	const loading = useAppSelector((state) => state.fixtures.loading)
	const leagueId = useAppSelector((state) => state.leagues.selectedLeague)
	const fixtures = useAppSelector((state) => state.fixtures.fixtures)
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (!loading) {
			dispatch(fetchFixtures(leagueId.toString()))
		}
	}, [leagueId])
	return (
		<Spin spinning={loading} size="large">
		<FixturesContainer>
			{fixtures.map((fixture: Head2Head) => {
			return <FixtureItem {...{fixture}} key={fixture.fixture.id} />
			})}
		</FixturesContainer>
		<HeadToHeadModal />
		</Spin>
	)
}

export default Fixtures;
