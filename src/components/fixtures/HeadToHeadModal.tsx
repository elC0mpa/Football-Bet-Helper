import {Spin} from "antd";
import Modal from "antd/es/modal/Modal"
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/store";
import {fecthHeadToHead, setHeadToHeadFixture} from "../../store/fixturesSlice";
import {Head2Head} from "../../types/Fixture";
import FixtureItem from "./FixtureItem";
import {FixturesContainer} from "./styled";

const HeadToHeadModal = () => {
	const isOpen = useAppSelector((state) => state.fixtures.isHeadToHeadModalOpen)
	const isLoading = useAppSelector((state) => state.fixtures.loadingHeadToHeadData)
	const headToHeadFixture: Head2Head = useAppSelector((state) => state.fixtures.selectedFixture!)
	const headToHeadData = useAppSelector((state) => state.fixtures.headToHead)
	const dispatch = useAppDispatch()
	console.log('headToHeadData', headToHeadData);
	
	useEffect(() => {
		headToHeadFixture && dispatch(fecthHeadToHead(headToHeadFixture))
	}, [headToHeadFixture])
	return (
		<Modal open={isOpen} centered closable={false} cancelButtonProps={{style: {display: 'none'}}} onOk={() => dispatch(setHeadToHeadFixture(null))} destroyOnClose bodyStyle={{overflowY: 'auto', maxHeight: '90vh'}} width={600}>
			<Spin spinning={isLoading}>
				<FixturesContainer>
					{headToHeadData.map((fixture: Head2Head) => {
					return <FixtureItem {...{fixture}} showActions={false} key={fixture.fixture.id} />
					})}
				</FixturesContainer>
			</Spin>
		</Modal>
	)
}

export default HeadToHeadModal;
