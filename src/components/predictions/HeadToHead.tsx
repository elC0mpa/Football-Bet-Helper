import {useAppSelector} from "../../hooks/store";
import {Head2Head} from "../../types/Fixture";
import FixtureItem from "./../fixtures/FixtureItem";
import {FixturesContainer} from "./../fixtures/styled";

const HeadToHeadTab = () => {
	const headToHeadData = useAppSelector((state) => state.fixtures.headToHead)

	return (
		<FixturesContainer>
			{headToHeadData.map((fixture: Head2Head) => {
			return <FixtureItem {...{fixture}} showActions={false} key={fixture.fixture.id} />
			})}
		</FixturesContainer>
	)
}

export default HeadToHeadTab;

