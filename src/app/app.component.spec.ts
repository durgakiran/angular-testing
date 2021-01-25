
import { CommonModule } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import { waitFor } from '@testing-library/dom';
import { AppComponent } from './app.component';


describe('behavioral subject', () => {
  it('should not render div', async () => {
    const component = await render(AppComponent, {
      imports: [CommonModule]
    });
    expect(screen.queryByTestId('dummy')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('dummy')).not.toBeInTheDocument(), { interval: 200 });
  });
});

