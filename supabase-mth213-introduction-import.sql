-- MTH213: Introduction to Differential Equations
-- Run in Supabase SQL Editor. Re-running updates these question IDs without duplicates.
insert into public.questions (id, course, topic, prompt, d, options, explain)
values
  (
    'MTH213-IDE-001', 'MTH213', 'Introduction to Differential Equations',
    'The derivative dy/dx of y = f(x) represents:',
    1,
    '[{"t":"The area under the curve","tag":"Confused derivative with integral","why":"An integral can represent area. The derivative describes the rate of change."},{"t":"The rate at which y changes with respect to x","ok":true},{"t":"The value of y when x = 0","tag":"Confused derivative with initial value","why":"The derivative is a rate of change, not the value of the function at a point."},{"t":"The integral of f(x)","tag":"Confused derivative with integral","why":"The derivative and integral are different operations."}]'::jsonb,
    'dy/dx gives the rate at which y changes with respect to x.'
  ),
  (
    'MTH213-IDE-002', 'MTH213', 'Introduction to Differential Equations',
    'A differential equation is an equation containing:',
    1,
    '[{"t":"Only constants and integrals","tag":"Missed the derivative requirement","why":"A differential equation is defined by the presence of derivatives."},{"t":"Only algebraic terms in x and y","tag":"Missed the derivative requirement","why":"An algebraic equation without derivatives is not a differential equation."},{"t":"Derivatives of one or more dependent variables with respect to one or more independent variables","ok":true},{"t":"Only partial sums of a series","tag":"Confused unrelated concepts","why":"Series sums are not part of the definition of a differential equation."}]'::jsonb,
    'A differential equation relates variables and their derivatives.'
  ),
  (
    'MTH213-IDE-003', 'MTH213', 'Introduction to Differential Equations',
    'An ordinary differential equation contains derivatives with respect to:',
    1,
    '[{"t":"Two or more independent variables","tag":"Confused ODE with PDE","why":"Derivatives with respect to multiple independent variables indicate a PDE."},{"t":"Exactly one independent variable","ok":true},{"t":"No independent variable","tag":"Ignored the independent variable","why":"An ODE describes derivatives with respect to one independent variable."},{"t":"Time only","tag":"Overly restricted the definition","why":"The independent variable can be any variable, not only time."}]'::jsonb,
    'An ODE has derivatives with respect to exactly one independent variable.'
  ),
  (
    'MTH213-IDE-004', 'MTH213', 'Introduction to Differential Equations',
    'Which of these is a partial differential equation?',
    1,
    '[{"t":"dy/dx = x + cos x","tag":"Mistook an ODE for a PDE","why":"This uses an ordinary derivative with respect to one independent variable, x."},{"t":"m d²u/dt² = F","tag":"Mistook an ODE for a PDE","why":"This has an ordinary derivative with respect to the single independent variable, t."},{"t":"∂²u/∂x² + ∂²u/∂y² = 0","ok":true},{"t":"d³y/dx³ + y = 0","tag":"Mistook an ODE for a PDE","why":"This uses ordinary derivatives with respect to x only."}]'::jsonb,
    'The equation uses partial derivatives with respect to x and y, so it is a PDE.'
  ),
  (
    'MTH213-IDE-005', 'MTH213', 'Introduction to Differential Equations',
    'Equation ∂²u/∂x² = ∂²u/∂t² − 2∂u/∂t is written in subscript notation as:',
    2,
    '[{"t":"u_xx = u_tt − 2u_t","ok":true},{"t":"u_x = u_t − 2u","tag":"Dropped derivative orders","why":"The equation contains second partial derivatives with respect to x and t."},{"t":"u_xx = u_tt + 2u_t","tag":"Changed the sign","why":"The original equation has −2∂u/∂t, so the subscript form also has −2u_t."},{"t":"u″ = u′ − 2u","tag":"Used ordinary derivative notation","why":"This is a PDE, so its partial derivatives are denoted with subscripts here."}]'::jsonb,
    'The subscript notation is u_xx = u_tt − 2u_t.'
  ),
  (
    'MTH213-IDE-006', 'MTH213', 'Introduction to Differential Equations',
    'What is the order of d³y/dx³ + d²y/dx² + (dy/dx)⁴ = x²?',
    1,
    '[{"t":"1","tag":"Selected the first derivative","why":"Order is determined by the highest derivative present, not the first derivative."},{"t":"2","tag":"Selected the second derivative","why":"A third derivative is present, so the order is higher than two."},{"t":"3","ok":true},{"t":"4","tag":"Confused degree with order","why":"The first derivative is raised to the fourth power, but the highest derivative is third order."}]'::jsonb,
    'The highest derivative is the third derivative, so the equation is third order.'
  ),
  (
    'MTH213-IDE-007', 'MTH213', 'Introduction to Differential Equations',
    'What is the degree of d³y/dx³ + d²y/dx² + (dy/dx)⁴ = x²?',
    1,
    '[{"t":"4","tag":"Used the power of a lower derivative","why":"The first derivative is raised to the fourth power, but degree uses the highest-order derivative."},{"t":"3","tag":"Used the order as the degree","why":"The third derivative appears to the first power."},{"t":"2","tag":"Used the power of the second derivative","why":"The second derivative is not the highest-order derivative."},{"t":"1","ok":true}]'::jsonb,
    'The highest-order derivative, d³y/dx³, is to the first power, so the degree is one.'
  ),
  (
    'MTH213-IDE-008', 'MTH213', 'Introduction to Differential Equations',
    'The order and degree of y = x dy/dx + (dy/dx)² are:',
    1,
    '[{"t":"Order 2, degree 1","tag":"Misread the derivative order","why":"Only first derivatives occur."},{"t":"Order 2, degree 2","tag":"Misread the derivative order","why":"The derivative is first order, even though it is squared."},{"t":"Order 1, degree 1","tag":"Ignored the derivative power","why":"The first derivative is squared, so the degree is two."},{"t":"Order 1, degree 2","ok":true}]'::jsonb,
    'The highest derivative is first order and it is squared, giving order one and degree two.'
  ),
  (
    'MTH213-IDE-009', 'MTH213', 'Introduction to Differential Equations',
    'What is the order of sin y · d²y/dx² = (1 − y) dy/dx + y²?',
    1,
    '[{"t":"0","tag":"Ignored the derivatives","why":"The equation contains first and second derivatives."},{"t":"1","tag":"Selected the lower derivative","why":"A second derivative is present, so the order is at least two."},{"t":"2","ok":true},{"t":"3","tag":"Counted terms instead of derivative order","why":"Order is the highest derivative order, which is two."}]'::jsonb,
    'The highest derivative is d²y/dx², so the equation is second order.'
  ),
  (
    'MTH213-IDE-010', 'MTH213', 'Introduction to Differential Equations',
    'Which of these equations is linear?',
    2,
    '[{"t":"y″ + y y′ = x","tag":"Dependent variable multiplies a derivative","why":"The product y y′ makes the equation nonlinear."},{"t":"(y′)² + 4y = cos x","tag":"Derivative has a power greater than one","why":"A derivative appears squared, so the equation is nonlinear."},{"t":"y⁗ + y″ + y² = 5","tag":"Dependent variable is squared","why":"The term y² makes the equation nonlinear."},{"t":"x³y‴ + 5xy′ + 6y = eˣ","ok":true}]'::jsonb,
    'The equation is linear because y and its derivatives appear only to the first power and are not multiplied together.'
  ),
  (
    'MTH213-IDE-011', 'MTH213', 'Introduction to Differential Equations',
    'y d²y/dx² + ½ sin x = 0 is nonlinear because:',
    1,
    '[{"t":"It is second order","tag":"Order does not determine linearity","why":"A second-order differential equation can be linear or nonlinear."},{"t":"It contains the product of y and d²y/dx²","ok":true},{"t":"It contains sin x","tag":"Confused a coefficient function with nonlinearity","why":"A function of the independent variable alone does not make the equation nonlinear."},{"t":"It contains the constant ½","tag":"Constants do not determine linearity","why":"A constant coefficient does not make a differential equation nonlinear."}]'::jsonb,
    'The dependent variable y multiplies one of its derivatives, violating linearity.'
  ),
  (
    'MTH213-IDE-012', 'MTH213', 'Introduction to Differential Equations',
    'Which term would make a differential equation nonlinear?',
    1,
    '[{"t":"5x dy/dx","tag":"Coefficient depends only on x","why":"A coefficient depending on the independent variable is allowed in a linear equation."},{"t":"eˣ standing alone","tag":"Independent-variable term","why":"A term depending only on x does not make the equation nonlinear."},{"t":"y dy/dx","ok":true},{"t":"x³ d³y/dx³","tag":"Coefficient depends only on x","why":"A coefficient depending on x is allowed when the dependent variable and derivatives remain first degree."}]'::jsonb,
    'The product of the dependent variable and its derivative makes the equation nonlinear.'
  ),
  (
    'MTH213-IDE-013', 'MTH213', 'Introduction to Differential Equations',
    'In dy/dt + dx/dt = 2x + 3y:',
    1,
    '[{"t":"There is one dependent variable and two independent variables","tag":"Confused variables and roles","why":"Both x and y vary with respect to t."},{"t":"There are two dependent variables (x and y) and one independent variable (t)","ok":true},{"t":"There are two independent variables and no dependent variable","tag":"Reversed dependent and independent variables","why":"The derivatives show x and y depend on t."},{"t":"There is no dependent variable","tag":"Missed the variables being differentiated","why":"x and y are both dependent variables."}]'::jsonb,
    'Both x and y depend on the single independent variable t.'
  ),
  (
    'MTH213-IDE-014', 'MTH213', 'Introduction to Differential Equations',
    'The equation dy/dx = 2x is:',
    1,
    '[{"t":"First order, first degree","ok":true},{"t":"Second order, first degree","tag":"Misread the highest derivative","why":"Only the first derivative appears."},{"t":"First order, second degree","tag":"Misread the derivative power","why":"The first derivative is to the first power."},{"t":"Second order, second degree","tag":"Misread order and degree","why":"The equation contains only a first derivative to the first power."}]'::jsonb,
    'The highest derivative is first order and appears to the first power.'
  ),
  (
    'MTH213-IDE-015', 'MTH213', 'Introduction to Differential Equations',
    'Eliminating m from y = mx gives:',
    1,
    '[{"t":"y + x dy/dx = 0","tag":"Sign error","why":"Differentiating gives dy/dx = m. Substituting m into y = mx gives y = x dy/dx."},{"t":"dy/dx = x","tag":"Did not eliminate m correctly","why":"The derivative equals m, not x."},{"t":"y = dy/dx","tag":"Dropped the factor x","why":"Substitution into y = mx retains the factor x."},{"t":"y − x dy/dx = 0","ok":true}]'::jsonb,
    'Differentiate to get dy/dx = m, then substitute into y = mx to obtain y − x dy/dx = 0.'
  ),
  (
    'MTH213-IDE-016', 'MTH213', 'Introduction to Differential Equations',
    'Eliminating A from y = Ax + A² gives:',
    2,
    '[{"t":"y = x y′ + (y′)²","ok":true},{"t":"y = x y′ − (y′)²","tag":"Sign error","why":"Since y′ = A, substituting A into A² gives +(y′)²."},{"t":"y″ = 0","tag":"Differentiated unnecessarily","why":"One derivative gives y′ = A, allowing A to be eliminated directly."},{"t":"y′ = A²","tag":"Incorrect differentiation","why":"Differentiating y = Ax + A² with respect to x gives y′ = A."}]'::jsonb,
    'Differentiate to get y′ = A, then substitute A = y′ into the original family.'
  ),
  (
    'MTH213-IDE-017', 'MTH213', 'Introduction to Differential Equations',
    'The differential equation for y = A cos x + B sin x is:',
    1,
    '[{"t":"y″ − y = 0","tag":"Sign error","why":"The second derivative is y″ = −A cos x − B sin x = −y."},{"t":"y″ + y = 0","ok":true},{"t":"y′ + y = 0","tag":"Wrong derivative order","why":"The family requires two derivatives to eliminate both arbitrary constants."},{"t":"y″ + y′ = 0","tag":"Combined unrelated derivatives","why":"Differentiating twice gives y″ = −y."}]'::jsonb,
    'The second derivative is y″ = −y, hence y″ + y = 0.'
  ),
  (
    'MTH213-IDE-018', 'MTH213', 'Introduction to Differential Equations',
    'To eliminate the constants from y = A cos x + B sin x, you differentiate:',
    1,
    '[{"t":"0 times","tag":"Constants remain","why":"The constants A and B must be eliminated from the family."},{"t":"1 time","tag":"Not enough differentiations","why":"One differentiation does not give enough independent equations to eliminate both constants."},{"t":"2 times","ok":true},{"t":"3 times","tag":"Differentiated more than necessary","why":"The family has two arbitrary constants, so two differentiations are sufficient."}]'::jsonb,
    'There are two arbitrary constants, so differentiate twice to form the second-order equation.'
  ),
  (
    'MTH213-IDE-019', 'MTH213', 'Introduction to Differential Equations',
    'The differential equation y′ = f(x, y) satisfied by y = 4e²ˣ + 3 is:',
    2,
    '[{"t":"y′ = 2y + 6","tag":"Sign/algebra error","why":"Since y − 3 = 4e²ˣ, the derivative is y′ = 2(y − 3) = 2y − 6."},{"t":"y′ = y − 3","tag":"Missed the exponent factor","why":"Differentiating e²ˣ contributes a factor of 2."},{"t":"y′ = 4y − 3","tag":"Incorrect substitution","why":"Substitute 4e²ˣ = y − 3 into y′ = 8e²ˣ."},{"t":"y′ = 2y − 6","ok":true}]'::jsonb,
    'Differentiate y to get y′ = 8e²ˣ. Since 4e²ˣ = y − 3, this becomes y′ = 2y − 6.'
  ),
  (
    'MTH213-IDE-020', 'MTH213', 'Introduction to Differential Equations',
    'The differential equation y′ = f(x, y) satisfied by y = 3e³ˣ is:',
    1,
    '[{"t":"y′ = 3y","ok":true},{"t":"y′ = y","tag":"Missed the exponent factor","why":"Differentiating e³ˣ contributes a factor of 3."},{"t":"y′ = 9y","tag":"Multiplied by the coefficient twice","why":"The derivative is 9e³ˣ, which equals 3y."},{"t":"y′ = 3y + 1","tag":"Added an unrelated constant","why":"Differentiating gives a homogeneous relation y′ = 3y."}]'::jsonb,
    'Differentiating gives y′ = 9e³ˣ = 3y.'
  ),
  (
    'MTH213-IDE-021', 'MTH213', 'Introduction to Differential Equations',
    'The differential equation y′ = f(x, y) satisfied by y = 4e⁻⁴ˣ + 1/2 is:',
    2,
    '[{"t":"y′ = −4y − 2","tag":"Sign/algebra error","why":"Using 4e⁻⁴ˣ = y − 1/2 gives y′ = −4(y − 1/2) = −4y + 2."},{"t":"y′ = 4y − 2","tag":"Missed the negative exponent","why":"Differentiating e⁻⁴ˣ contributes a factor of −4."},{"t":"y′ = −4y + 2","ok":true},{"t":"y′ = −16y","tag":"Did not remove the constant term","why":"Substitute e⁻⁴ˣ = (y − 1/2)/4 into the derivative."}]'::jsonb,
    'Differentiating gives y′ = −16e⁻⁴ˣ. Substituting e⁻⁴ˣ = (y − 1/2)/4 yields y′ = −4y + 2.'
  ),
  (
    'MTH213-IDE-022', 'MTH213', 'Introduction to Differential Equations',
    'The differential equation for y = c₁eˣ + c₂xeˣ + c₃x²eˣ is:',
    2,
    '[{"t":"y‴ + 3y″ + 3y′ + y = 0","tag":"Used the wrong characteristic polynomial","why":"The repeated characteristic root is 1, giving (r − 1)³."},{"t":"y‴ − 3y″ + 3y′ − y = 0","ok":true},{"t":"y‴ − y = 0","tag":"Ignored the repeated root","why":"The family has a triple root at r = 1, not roots satisfying r³ − 1 = 0."},{"t":"y″ − 2y′ + y = 0","tag":"Used a second-order equation","why":"Three independent constants require a third-order differential equation."}]'::jsonb,
    'The family corresponds to the repeated characteristic root r = 1 of multiplicity three, giving (D − 1)³y = 0.'
  ),
  (
    'MTH213-IDE-023', 'MTH213', 'Introduction to Differential Equations',
    'The differential equation for y = eˣ(A cos x + B sin x) is:',
    2,
    '[{"t":"y″ − 2y′ + 2y = 0","ok":true},{"t":"y″ + 2y′ + 2y = 0","tag":"Wrong sign on the real part","why":"The characteristic roots are 1 ± i, giving r² − 2r + 2."},{"t":"y″ + y = 0","tag":"Ignored the exponential factor","why":"The exponential factor shifts the characteristic roots from ±i to 1 ± i."},{"t":"y″ − 2y′ + y = 0","tag":"Ignored the imaginary part","why":"The characteristic polynomial for roots 1 ± i is r² − 2r + 2."}]'::jsonb,
    'The characteristic roots are 1 ± i, so the equation is y″ − 2y′ + 2y = 0.'
  ),
  (
    'MTH213-IDE-024', 'MTH213', 'Introduction to Differential Equations',
    'If y = x^(−1/2), then y″ equals:',
    1,
    '[{"t":"−(1/2)x^(−3/2)","tag":"Stopped after the first derivative","why":"This is y′, not y″."},{"t":"(3/4)x^(−5/2)","ok":true},{"t":"(3/4)x^(−3/2)","tag":"Used the wrong power","why":"Differentiating y′ = −(1/2)x^(−3/2) lowers the exponent by one more."},{"t":"−(3/4)x^(−5/2)","tag":"Sign error","why":"Differentiating the negative first derivative gives a positive second derivative."}]'::jsonb,
    'y′ = −(1/2)x^(−3/2), so y″ = (3/4)x^(−5/2).'
  ),
  (
    'MTH213-IDE-025', 'MTH213', 'Introduction to Differential Equations',
    'Which function is a solution of y′ + 20y = 24?',
    2,
    '[{"t":"y = 24e⁻²⁰ˣ","tag":"Checked only the derivative term","why":"Substitution gives y′ + 20y = 0, not 24."},{"t":"y = 6/5 + (6/5)e²⁰ˣ","tag":"Exponential term has the wrong sign","why":"This does not satisfy the equation after substitution."},{"t":"y = 20x + 24","tag":"Substitution does not yield 24","why":"Its derivative plus twenty times the function depends on x."},{"t":"y = 6/5 − (6/5)e⁻²⁰ˣ","ok":true}]'::jsonb,
    'For y = 6/5 − (6/5)e⁻²⁰ˣ, y′ = 24e⁻²⁰ˣ and y′ + 20y = 24.'
  ),
  (
    'MTH213-IDE-026', 'MTH213', 'Introduction to Differential Equations',
    'An initial condition has the form:',
    1,
    '[{"t":"y′ = f(x, y)","tag":"This is a differential equation","why":"An initial condition specifies a value of the solution at a given point."},{"t":"y = mx","tag":"This is a family of functions","why":"An initial condition gives a function value at a specified point."},{"t":"y(x₀) = y₀","ok":true},{"t":"y(x) = C","tag":"This is a constant-function form","why":"An initial condition specifies the solution at a particular input value."}]'::jsonb,
    'A standard initial condition specifies the solution value as y(x₀) = y₀.'
  ),
  (
    'MTH213-IDE-027', 'MTH213', 'Introduction to Differential Equations',
    'An initial value problem is:',
    1,
    '[{"t":"A differential equation together with an appropriate number of initial conditions","ok":true},{"t":"Any differential equation with a constant","tag":"A constant is not an initial condition","why":"An IVP must include specified initial values."},{"t":"A differential equation with arbitrary constants only","tag":"Confused general solutions with IVPs","why":"An IVP includes conditions that determine a particular solution."},{"t":"A partial differential equation in two variables","tag":"Overly restricted the definition","why":"An IVP can be formed from an ODE and its initial conditions."}]'::jsonb,
    'An IVP consists of a differential equation and enough initial conditions.'
  ),
  (
    'MTH213-IDE-028', 'MTH213', 'Introduction to Differential Equations',
    'A general solution of an ODE:',
    1,
    '[{"t":"Contains an initial condition","tag":"Confused general and particular solutions","why":"Initial conditions select particular values for the arbitrary constants."},{"t":"Contains no constants","tag":"Confused general and particular solutions","why":"A general solution normally contains arbitrary constants."},{"t":"Is always unique","tag":"Ignored the arbitrary constants","why":"A family of solutions is represented by the general solution."},{"t":"Contains arbitrary constants","ok":true}]'::jsonb,
    'A general solution represents a family of solutions using arbitrary constants.'
  ),
  (
    'MTH213-IDE-029', 'MTH213', 'Introduction to Differential Equations',
    'A particular solution is:',
    1,
    '[{"t":"Any solution containing arbitrary constants","tag":"This describes a general solution","why":"A particular solution has the arbitrary constants fixed."},{"t":"The solution of an IVP, containing no arbitrary constants","ok":true},{"t":"The differential equation itself","tag":"Confused equation with solution","why":"A solution is a function satisfying the differential equation."},{"t":"Always y = 0","tag":"Overly restricted the definition","why":"A particular solution depends on the equation and any specified conditions."}]'::jsonb,
    'A particular solution has no arbitrary constants; an IVP selects one using its initial conditions.'
  ),
  (
    'MTH213-IDE-030', 'MTH213', 'Introduction to Differential Equations',
    'The solution of y′ = −3y + 1, y(0) = 1 is:',
    2,
    '[{"t":"y = 1/3 + (2/3)e³ˣ","tag":"Exponential sign is wrong","why":"The homogeneous solution decays as e⁻³ˣ because the coefficient is −3."},{"t":"y = 1 − e⁻³ˣ","tag":"Fails the initial value","why":"At x = 0 this gives y = 0, not y = 1."},{"t":"y = 1/3 + (2/3)e⁻³ˣ","ok":true},{"t":"y = 3e⁻³ˣ + 1","tag":"Does not satisfy the initial value or equation","why":"Substituting x = 0 gives y = 4, not y = 1."}]'::jsonb,
    'The solution is y = 1/3 + Ce⁻³ˣ. Applying y(0) = 1 gives C = 2/3.'
  ),
  (
    'MTH213-IDE-031', 'MTH213', 'Introduction to Differential Equations',
    'The steps for forming a differential equation are:',
    1,
    '[{"t":"Integrate the equation once","tag":"Wrong operation","why":"Forming a differential equation from a family involves differentiating to eliminate arbitrary constants."},{"t":"Substitute x = 0","tag":"Does not eliminate arbitrary constants","why":"A fixed value of x does not generally remove all arbitrary constants."},{"t":"Solve for y","tag":"This does not form the required equation","why":"The family is differentiated and its arbitrary constants are eliminated."},{"t":"Differentiate as many times as there are arbitrary constants, then eliminate the constants","ok":true}]'::jsonb,
    'Differentiate enough times to obtain equations for eliminating the arbitrary constants.'
  ),
  (
    'MTH213-IDE-032', 'MTH213', 'Introduction to Differential Equations',
    'What is the order of the differential equation obtained from y² = Ax² + Bx + C?',
    1,
    '[{"t":"3","ok":true},{"t":"1","tag":"Used too few differentiations","why":"There are three arbitrary constants, so eliminating them leads to a third-order equation."},{"t":"2","tag":"Counted one fewer than the arbitrary constants","why":"The family contains three arbitrary constants."},{"t":"4","tag":"Differentiated more than necessary","why":"Three arbitrary constants lead to a third-order equation."}]'::jsonb,
    'The family contains three arbitrary constants, so the resulting differential equation is third order.'
  )
on conflict (id) do update set
  course = excluded.course,
  topic = excluded.topic,
  prompt = excluded.prompt,
  d = excluded.d,
  options = excluded.options,
  explain = excluded.explain;
