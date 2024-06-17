import styles from './InfoCard.module.css';

function InfoCard({children, href, icon, iconStyle, title, value}) {

	return (
		<div className="col-xxl-4 col-md-6">
			<div className={styles["card"]}>

				<div className={styles["card-body"]} to={href}>
					<h5 className={styles["card-title"]}>{title}</h5>
					<div className="d-flex align-items-center justify-center">
						<div style={iconStyle} className={`${styles["card-icon"]} rounded-circle d-flex align-items-center justify-content-center`}>
							{icon}
						</div>
						<div className="ps-3">
							<h6 className={styles["value"]}>{value}</h6>
							{children}
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default InfoCard;