export default [
  {
    label: 'Local',
    baseURL: 'http://192.168.31.96:15000/v1',
    homepage: 'http://192.168.31.96:15000',
    models: ['qwen/qwen3-coder-plus']
  },
  {
    label: 'OpenAI',
    baseURL: 'https://api.openai.com/v1',
    homepage: 'https://openai.com',
    models: ['gpt-4', 'gpt-3.5-turbo', 'gpt-3.5-turbo-16k', 'gpt-4.5']
  },
  {
    label: 'DeepSeek',
    baseURL: 'https://api.deepseek.com/v1',
    homepage: 'https://deepseek.com',
    models: ['deepseek-chat', 'deepseek-coder', 'deepseek-reasoner']
  }
]
