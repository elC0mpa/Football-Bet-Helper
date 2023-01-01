import {Spin, Tabs} from "antd";
import Modal from "antd/es/modal/Modal"
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/store";
import {fecthPredictions, setHeadToHeadFixture} from "../../store/fixturesSlice";
import {Head2Head} from "../../types/Fixture";
import Comparison from "./Comparison";
import HeadToHeadTab from "./HeadToHead";

const HeadToHeadModal = () => {
	const isOpen = useAppSelector((state) => state.fixtures.isHeadToHeadModalOpen)
	const isLoading = useAppSelector((state) => state.fixtures.loadingHeadToHeadData)
	const headToHeadFixture: Head2Head = useAppSelector((state) => state.fixtures.selectedFixture!)
	const dispatch = useAppDispatch()
  const tabItems = 
    [
      {
        key: '0',
        label: 'Head To Head',
        children: <HeadToHeadTab/>
      },
      {
        key: '1',
				label: 'Comparison',
				children: <Comparison/>
      }
    ]
	
	useEffect(() => {
		headToHeadFixture && dispatch(fecthPredictions(headToHeadFixture))
	}, [headToHeadFixture])
	return (
		<Modal open={isOpen} centered closable={false} cancelButtonProps={{style: {display: 'none'}}} onOk={() => dispatch(setHeadToHeadFixture(null))} destroyOnClose bodyStyle={{overflowY: 'auto', maxHeight: '90vh'}} width={600}>
			<Spin spinning={isLoading}>
				<Tabs items={tabItems} />
			</Spin>
		</Modal>
	)
}

export default HeadToHeadModal;
