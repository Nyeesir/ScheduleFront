import styles from './schedule.module.css';

const Calendar = () => {
    return (
        <div className={styles.calendar}>
            <div className={styles.timeline}>
                <div className={styles.spacer}></div>
                {[
                    "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
                ].map((time) => (
                    <div key={time} className={styles['time-marker']}>{time}</div>
                ))}
            </div>

            <div className={styles.days}>
                {/* Monday */}
                <div className={`${styles.day} ${styles.mon}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>9</p>
                        <p className={styles['date-day']}>Poniedziałek</p>
                    </div>
                    <div className={styles.events}>
                        <div className={`${styles.event} ${styles['start-2']} ${styles['end-5']} ${styles.securities}`}>
                            <p className={styles.title}>Securities Regulation</p>
                            <p className={styles.time}>2 PM - 5 PM</p>
                        </div>
                    </div>
                </div>

                {/* Tuesday */}
                <div className={`${styles.day} ${styles.tues}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>9</p>
                        <p className={styles['date-day']}>Wtorek</p>
                    </div>
                    <div className={styles.events}>
                        <div className={`${styles.event} ${styles['start-10']} ${styles['end-12']} ${styles['corp-fi']}`}>
                            <p className={styles.title}>Corporate Finance</p>
                            <p className={styles.time}>10 AM - 12 PM</p>
                        </div>
                        <div className={`${styles.event} ${styles['start-1']} ${styles['end-4']} ${styles['ent-law']}`}>
                            <p className={styles.title}>Entertainment Law</p>
                            <p className={styles.time}>1PM - 4PM</p>
                        </div>
                    </div>
                </div>

                {/* Wednesday */}
                <div className={`${styles.day} ${styles.wed}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>10</p>
                        <p className={styles['date-day']}>Środa</p>
                    </div>
                    <div className={styles.events}>
                        <div className={`${styles.event} ${styles['start-12']} ${styles['end-1']} ${styles.writing}`}>
                            <p className={styles.title}>Writing Seminar</p>
                            <p className={styles.time}>11 AM - 12 PM</p>
                        </div>
                        <div className={`${styles.event} ${styles['start-2']} ${styles['end-5']} ${styles.securities}`}>
                            <p className={styles.title}>Securities Regulation</p>
                            <p className={styles.time}>2 PM - 5 PM</p>
                        </div>
                    </div>
                </div>

                {/* Thursday */}
                <div className={`${styles.day} ${styles.thurs}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>10</p>
                        <p className={styles['date-day']}>Czwartek</p>
                    </div>
                    <div className={styles.events}>
                        <div className={`${styles.event} ${styles['start-10']} ${styles['end-12']} ${styles['corp-fi']}`}>
                            <p className={styles.title}>Corporate Finance</p>
                            <p className={styles.time}>10 AM - 12 PM</p>
                        </div>
                        <div className={`${styles.event} ${styles['start-1']} ${styles['end-4']} ${styles['ent-law']}`}>
                            <p className={styles.title}>Entertainment Law</p>
                            <p className={styles.time}>1PM - 4PM</p>
                        </div>
                    </div>
                </div>

                {/* Friday */}
                <div className={`${styles.day} ${styles.fri}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>14</p>
                        <p className={styles['date-day']}>Piątek</p>
                    </div>
                    <div className={styles.events}></div>
                </div>

                <div className={`${styles.day} ${styles.fri}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>14</p>
                        <p className={styles['date-day']}>Sobota</p>
                    </div>
                    <div className={styles.events}></div>
                </div>

                <div className={`${styles.day} ${styles.fri}`}>
                    <div className={styles.date}>
                        <p className={styles['date-num']}>14</p>
                        <p className={styles['date-day']}>Niedziela</p>
                    </div>
                    <div className={styles.events}></div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
