import { Dispatch, SetStateAction, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import { ReactComponent as FilterSvg } from 'assets/icon/filter.svg';
import { ReactComponent as CloseSvg } from 'assets/icon/close.svg';
import { date } from 'types/index';
import { DATE_FORMAT } from 'constants/index';

interface FilterProps {
  createdAtPeriod: date[];
  setCreatedAtPeriod: Dispatch<SetStateAction<date[]>>;
  setImportance: any;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Filter({
  createdAtPeriod,
  setCreatedAtPeriod,
  setImportance,
  setIsOpen,
}: FilterProps): ReactElement {
  const [startDate, setStartDate] = useState<date>(createdAtPeriod[0]);
  const [endDate, setEndDate] = useState<date>(createdAtPeriod[1]);
  const [radioInputs, setRadioInputs] = useState({
    high: false,
    low: false,
    none: false,
  });

  const onStartDateChange = (date: Moment | null) => {
    date ? setStartDate(date.format(DATE_FORMAT)) : setStartDate(null);
  };

  const onEndDateChange = (date: Moment | null) => {
    date ? setEndDate(date.format(DATE_FORMAT)) : setEndDate(null);
  };

  const disabledStartDate = (current: Moment): boolean => {
    if (current.year() < 0) return true;

    return endDate ? current.format(DATE_FORMAT) > endDate : false;
  };

  const disabledEndDate = (current: Moment): boolean => {
    if (current.year() > 9999) return true;

    return startDate ? current.format(DATE_FORMAT) < startDate : false;
  };

  const onApplyButtonClick = (): void => {
    setCreatedAtPeriod([startDate, endDate]);
    setIsOpen(false);
    setImportance(radioInputs);
  };

  const onChange = (e: any) => {
    setRadioInputs((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.checked,
      };
    });
  };

  return (
    <FilterWrapper>
      <HeaderRow>
        <FilterIcon />
        <div>Filter</div>
        <CloseIcon onClick={() => setIsOpen(false)} />
      </HeaderRow>
      <TitleRow>
        <div>중요도</div>
      </TitleRow>
      <ImpotantRow>
        <Row>
          <div>high</div>
          <Input
            type="checkbox"
            name="high"
            checked={radioInputs.high}
            onChange={onChange}
          />
        </Row>
        <Row>
          <div>low</div>
          <Input
            type="checkbox"
            name="low"
            checked={radioInputs.low}
            onChange={onChange}
          />
        </Row>
        <Row>
          <div>none</div>
          <Input
            type="checkbox"
            name="none"
            checked={radioInputs.none}
            onChange={onChange}
          />
        </Row>
      </ImpotantRow>
      <TitleRow>
        <div>생성일</div>
      </TitleRow>
      <DateRow>
        <div>시작일</div>
        <DatePicker
          format={DATE_FORMAT}
          value={startDate ? moment(startDate) : null}
          inputReadOnly
          getPopupContainer={(trigger: HTMLElement) =>
            trigger.parentElement as HTMLElement
          }
          onChange={onStartDateChange}
          disabledDate={disabledStartDate}
        />
      </DateRow>
      <DateRow>
        <div>마지막일</div>
        <DatePicker
          format={DATE_FORMAT}
          value={endDate ? moment(endDate) : null}
          inputReadOnly
          getPopupContainer={(trigger: HTMLElement) =>
            trigger.parentElement as HTMLElement
          }
          onChange={onEndDateChange}
          disabledDate={disabledEndDate}
        />
      </DateRow>
      <ButtonRow>
        <button onClick={onApplyButtonClick}>적용</button>
        <button onClick={() => setIsOpen(false)}>취소</button>
      </ButtonRow>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImpotantRow = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  margin-left: 10px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const HeaderRow = styled(Row)`
  justify-content: space-between;
  background-color: #f6f8fa;
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 1.6rem;

  & > :nth-child(2) {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 0.3rem;
  }
`;

const TitleRow = styled(Row)`
  border-bottom: 1px solid #e1e4e8;

  & > :first-child {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const DateRow = styled(Row)`
  justify-content: space-between;
  position: relative;

  &:last-child {
    padding-bottom: 1rem;
    border-bottom: 1px solid #e1e4e8;
  }
`;

const ButtonRow = styled(Row)`
  border-top: 1px solid #e1e4e8;
  justify-content: space-around;

  button {
    flex: 1;
    padding: 0.8rem;
    margin: 0 0.8rem;
    border: 1px solid #dcdcdc;
    border-radius: 0.8rem;
    cursor: pointer;
  }

  & > :first-child {
    background-color: #1890ff;
    color: #fff;
  }
`;

const FilterIcon = styled(FilterSvg)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const CloseIcon = styled(CloseSvg)`
  width: 1em;
  height: 1em;
  margin-left: auto;
  cursor: pointer;
  fill: gray;

  &:hover {
    fill: black;
  }
`;

export default Filter;
