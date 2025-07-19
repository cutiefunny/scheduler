// app/page.js
'use client';

import React, { useState } from 'react';
import styles from './page.module.css'; // CSS 모듈 임포트

// 더미 스케줄 데이터
const dummySchedules = [
  { id: 1, date: '2025-07-19', time: '10:00', title: '팀 회의', description: '주간 업무 진행 상황 공유' },
  { id: 2, date: '2025-07-19', time: '14:30', title: '클라이언트 미팅', description: '새 프로젝트 제안' },
  { id: 3, date: '2025-07-20', time: '09:00', title: '개인 개발 시간', description: '새로운 기술 스택 학습' },
  { id: 4, date: '2025-07-21', time: '11:00', title: '코드 리뷰', description: 'PR 확인 및 피드백' },
];

export default function SchedulerPage() {
  const [selectedDate, setSelectedDate] = useState('2025-07-19');

  const schedulesForSelectedDate = dummySchedules.filter(
    (schedule) => schedule.date === selectedDate
  );

  return (
    // styles 객체의 클래스 이름 사용
    <div className={styles.container}>
      <h1 className={styles.title}>간단 스케줄러</h1>

      <div className={styles.datePickerContainer}>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className={styles.dateInput}
        />
      </div>

      <div className={styles.scheduleListContainer}>
        <h2 className={styles.listTitle}>
          {selectedDate}의 스케줄
        </h2>

        {schedulesForSelectedDate.length > 0 ? (
          <ul className={styles.scheduleList}>
            {schedulesForSelectedDate.map((schedule) => (
              <li key={schedule.id} className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>
                  {schedule.time}
                </div>
                <div>
                  <h3 className={styles.scheduleTitle}>
                    {schedule.title}
                  </h3>
                  <p className={styles.scheduleDescription}>{schedule.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noScheduleText}>
            선택된 날짜에 스케줄이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}