

export default function FAQ() {
	return (
		<div className="join join-vertical w-full">
			<div className="collapse collapse-arrow join-item border border-base-300">
				<input type="radio" name="my-accordion-4" />
				<div className="collapse-title text-xl font-medium">
                What is your return policy?
				</div>
				<div className="collapse-content">
					<p>Our return policy allows you to return products within 30 days of purchase if they are in unused condition and in their original packaging. </p>
				</div>
			</div>
			<div className="collapse collapse-arrow join-item border border-base-300">
				<input type="radio" name="my-accordion-4" />
				<div className="collapse-title text-xl font-medium">
                How can I track my order?
				</div>
				<div className="collapse-content">
					<p>You can track your order by logging into your account and visiting the order status section.</p>
				</div>
			</div>
			<div className="collapse collapse-arrow join-item border border-base-300">
				<input type="radio" name="my-accordion-4" />
				<div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
				</div>
				<div className="collapse-content">
					<p>We accept a variety of payment methods, including credit cards, debit cards, PayPal, and other secure online payment options.</p>
				</div>
			</div>
		</div>
	);
}
