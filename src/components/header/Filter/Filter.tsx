import React, { Dispatch, SetStateAction, ReactElement, useState } from 'react';
import { date, Importance } from 'types/index';
import { DATE_FORMAT } from 'constants/index';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as FilterSvg } from 'assets/icon/filter.svg';
import { ReactComponent as CloseSvg } from 'assets/icon/close.svg';
import styled from 'styled-components';

interface FilterProps {
  createdAtPeriod: date[];
  setCreatedAtPeriod: Dispatch<SetStateAction<date[]>>;
  setImportance: Dispatch<SetStateAction<Importance>>;
  importance: Importance;
  setFade: Dispatch<SetStateAction<boolean>>;
}

function Filter({
  createdAtPeriod,
  setCreatedAtPeriod,
  setImportance,
  importance,
  setFade,
}: FilterProps): ReactElement {
  const [startDate, setStartDate] = useState<date>(createdAtPeriod[0]);
  const [endDate, setEndDate] = useState<date>(createdAtPeriod[1]);
  const [radioInputs, setRadioInputs] = useState<Importance>(importance);

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

  const handleClose = (): void => {
    setFade(false);
  };

  const onApplyButtonClick = (): void => {
    setCreatedAtPeriod([startDate, endDate]);
    handleClose();
    setImportance(radioInputs);
  };

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRadioInputs((prev: Importance) => {
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
        <CloseIcon onClick={handleClose} />
      </HeaderRow>
      <TitleRow>
        <div>중요도</div>
      </TitleRow>
      <ImpotantRow>
        <Label htmlFor="high" checked={radioInputs.high}>
          <IRow>
            <Input
              type="checkbox"
              name="high"
              id="high"
              checked={radioInputs.high}
              onChange={onRadioChange}
            />
            🔥 high
            <CheckIcon>
              <Icon icon={faCheck} />
            </CheckIcon>
          </IRow>
        </Label>
        <Label htmlFor="low" checked={radioInputs.low}>
          <IRow>
            <Input
              type="checkbox"
              name="low"
              id="low"
              checked={radioInputs.low}
              onChange={onRadioChange}
            />
            🎵 low
            <CheckIcon>
              <Icon icon={faCheck} />
            </CheckIcon>
          </IRow>
        </Label>
        <Label htmlFor="none" checked={radioInputs.none}>
          <IRow>
            <Input
              type="checkbox"
              name="none"
              id="none"
              checked={radioInputs.none}
              onChange={onRadioChange}
            />
            🧨 none
            <CheckIcon>
              <Icon icon={faCheck} />
            </CheckIcon>
          </IRow>
        </Label>
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
        <button onClick={handleClose}>취소</button>
      </ButtonRow>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImpotantRow = styled.div`
  margin: 2rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

const CheckIcon = styled.div`
  font-size: 1.6rem;
  display: none;
`;

const IRow = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const Input = styled.input`
  display: none;
`;
const Label = styled.label<{ checked: boolean }>`
  cursor: pointer;
  font-size: 16px;
  &:active {
    position: relative;
    top: 2px;
  }
  ${CheckIcon} {
    display: ${({ checked }) => (checked ? 'flex' : 'none')};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const HeaderRow = styled(Row)`
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
