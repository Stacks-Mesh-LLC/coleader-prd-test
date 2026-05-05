import { motion } from 'framer-motion';
import { Briefcase, Code, Rocket, Server, Users, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';

export default function ServicesPage() {
	const services = [
		{
			icon: <Code className="w-6 h-6 text-brand-primary" />,
			title: 'AI-Powered App Development',
			description: 'We build beautiful, high-performance web and mobile applications leveraging the latest AI models to automate and scale your workflows.',
			features: ['Full-stack Web & Mobile', 'AI Integration', 'Real-time Features'],
			gradient: 'from-brand-primary/20 to-transparent'
		},
		{
			icon: <Rocket className="w-6 h-6 text-brand-heavy" />,
			title: 'MVP & Prototyping',
			description: 'Validate your idea in weeks, not months. We deliver production-ready MVPs that wow investors and early adopters.',
			features: ['Rapid Prototyping', 'User Testing Ready', 'Scalable Architecture'],
			gradient: 'from-brand-heavy/20 to-transparent'
		},
		{
			icon: <Server className="w-6 h-6 text-brand-subtle" />,
			title: 'Infrastructure & Scaling',
			description: 'Ensure your app can handle millions of users with robust cloud architecture, edge computing, and performance optimization.',
			features: ['Cloudflare & AWS', 'Database Optimization', 'Zero-downtime Deployments'],
			gradient: 'from-brand-subtle/20 to-transparent'
		},
		{
			icon: <Users className="w-6 h-6 text-cyan-400" />,
			title: 'Elite Team Augmentation',
			description: 'Scale your engineering capacity instantly with our senior developers who seamlessly integrate with your existing agile processes.',
			features: ['Senior Engineers', 'Flexible Scaling', 'Domain Experts'],
			gradient: 'from-cyan-400/20 to-transparent'
		},
		{
			icon: <Sparkles className="w-6 h-6 text-purple-400" />,
			title: 'UI/UX & Brand Identity',
			description: 'Craft stunning, conversion-optimized interfaces that provide unforgettable experiences and elevate your digital brand.',
			features: ['Wireframing & Design', 'Design Systems', 'Usability Audits'],
			gradient: 'from-purple-400/20 to-transparent'
		},
		{
			icon: <Briefcase className="w-6 h-6 text-blue-400" />,
			title: 'Technical Consulting',
			description: 'Get expert guidance on tech stack selection, system architecture, security compliance, and long-term technical roadmaps.',
			features: ['Architecture Reviews', 'Tech Stack Selection', 'Security Audits'],
			gradient: 'from-blue-400/20 to-transparent'
		}
	];

	const processSteps = [
		{ num: '01', title: 'Discovery & Scope', description: 'We analyze your requirements and map out the optimal technical approach.' },
		{ num: '02', title: 'Design & Prototyping', description: 'Crafting beautiful, intuitive interfaces before writing a single line of code.' },
		{ num: '03', title: 'Agile Development', description: 'Iterative, transparent development with regular check-ins and deliverables.' },
		{ num: '04', title: 'Launch & Scale', description: 'Seamless deployment to production, followed by monitoring and proactive scaling.' }
	];

	return (
		<div className="min-h-screen bg-bg-1 pt-12 pb-24 relative overflow-hidden">
			{/* Animated Background Orbs */}
			<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxek0wIDBoMjF2MjFIMHoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
				<motion.div 
					animate={{ x: ["-5%", "10%", "-5%"], y: ["-5%", "5%", "-5%"], scale: [1, 1.1, 1] }}
					transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
					className="absolute top-[-10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-primary/20 blur-[100px]"
				/>
				<motion.div 
					animate={{ x: ["5%", "-10%", "5%"], y: ["5%", "-5%", "5%"], scale: [1, 1.2, 1] }}
					transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
					className="absolute bottom-[-10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-heavy/20 blur-[120px]"
				/>
			</div>

			<div className="relative z-10 px-5 max-w-7xl mx-auto">
				{/* Hero Section */}
				<section className="text-center mb-32 pt-16">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						className="max-w-4xl mx-auto"
					>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium text-sm mb-8">
							<Sparkles className="w-4 h-4" />
							<span>Transforming Ideas into Reality</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary mb-6 leading-[1.1]">
							Elevate Your App with <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-subtle">Coleader</span>
						</h1>
						<p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed font-medium">
							From concept to global scale, our elite team provides end-to-end development, AI integration, and robust infrastructure for your next big idea.
						</p>
						
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button 
								size="lg" 
								className="bg-brand-primary hover:bg-brand-heavy text-white font-semibold rounded-full px-8 py-7 text-lg shadow-lg shadow-brand-primary/25 transition-all hover:scale-105"
								onClick={() => window.open('https://calendly.com/quantumbases/30min', '_blank')}
							>
								<Calendar className="w-5 h-5 mr-2" />
								Book a Free Consultation
							</Button>
							<Button 
								size="lg" 
								variant="outline"
								className="rounded-full px-8 py-7 text-lg border-border-secondary hover:bg-bg-2 transition-all"
								onClick={() => {
									const processSection = document.getElementById('our-process');
									processSection?.scrollIntoView({ behavior: 'smooth' });
								}}
							>
								How We Work
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</div>
					</motion.div>
				</section>

				{/* Services Grid */}
				<section className="mb-32">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-text-primary mb-4">Our Expertise</h2>
						<p className="text-text-secondary text-lg max-w-2xl mx-auto">Comprehensive solutions tailored to accelerate your growth and dominate your market.</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative bg-bg-2/50 backdrop-blur-xl border border-border-secondary/50 rounded-3xl p-8 hover:bg-bg-3/50 transition-all duration-300 overflow-hidden"
							>
								<div className={clsx("absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.gradient)} />
								
								<div className="relative z-10">
									<div className="w-14 h-14 rounded-2xl bg-bg-3 border border-border-secondary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
										{service.icon}
									</div>
									<h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
									<p className="text-text-secondary leading-relaxed mb-8">{service.description}</p>
									
									<ul className="space-y-3">
										{service.features.map((feature, idx) => (
											<li key={idx} className="flex items-center text-sm font-medium text-text-primary/80">
												<CheckCircle2 className="w-4 h-4 mr-3 text-brand-primary" />
												{feature}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Process Section */}
				<section id="our-process" className="mb-32 max-w-5xl mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="bg-bg-2/80 backdrop-blur-xl border border-border-secondary rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
					>
						<div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-heavy/20 rounded-full blur-3xl pointer-events-none" />
						
						<div className="text-center mb-16 relative z-10">
							<h2 className="text-4xl font-bold text-text-primary mb-4">How We Work</h2>
							<p className="text-text-secondary text-lg">A proven, transparent process designed to deliver exceptional results rapidly.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
							{processSteps.map((step, index) => (
								<motion.div 
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex gap-6"
								>
									<div className="text-5xl font-black text-border-secondary/50 select-none">
										{step.num}
									</div>
									<div>
										<h4 className="text-xl font-bold text-text-primary mb-2">{step.title}</h4>
										<p className="text-text-secondary leading-relaxed">{step.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

				{/* Contact / CTA Section */}
				<section id="calendly-booking" className="max-w-4xl mx-auto pb-12">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="text-center relative bg-bg-2/50 backdrop-blur-xl border border-border-secondary/50 rounded-[40px] p-12 md:p-20 shadow-xl overflow-hidden"
					>
						<div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none" />
						
						<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 relative z-10">
							Ready to build something amazing?
						</h2>
						<p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto relative z-10">
							Schedule a free discovery call with our technical experts to discuss your vision, requirements, and scaling needs.
						</p>
						
						<Button 
							size="lg" 
							className="bg-brand-primary hover:bg-brand-heavy text-white font-semibold rounded-full px-10 py-8 text-xl shadow-lg shadow-brand-primary/25 transition-all hover:scale-105 relative z-10"
							onClick={() => window.open('https://calendly.com/quantumbases/30min', '_blank')}
						>
							<Calendar className="w-6 h-6 mr-3" />
							Book a Free Consultation
						</Button>
					</motion.div>
				</section>
			</div>
		</div>
	);
}
